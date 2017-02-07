import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory, Router } from 'react-router'
import { AppContainer } from 'react-hot-loader' // eslint-disable-line import/no-extraneous-dependencies

import createStore from './store/createStore'
import RootContainer from './containers/RootContainer'

import projectConfig from '../config/project.config'

const context = {
  insertCss: (...styles) => {
    // eslint-disable-next-line no-underscore-dangle
    const removeCss = styles.map(x => x._insertCss())
    return () => { removeCss.forEach(f => f()) }
  },
}

const initialState = window.__INITIAL_STATE__ // eslint-disable-line no-underscore-dangle
const store = createStore(initialState)

let routes = require('./routes').default

const MOUNT_NODE = document.getElementById('root')

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <RootContainer store={store} context={context}>
        <Router history={browserHistory}>
          {routes}
        </Router>
      </RootContainer>
    </AppContainer>,
    MOUNT_NODE // eslint-disable-line comma-dangle
  )
}

if (projectConfig.env === 'development') {
  if (module.hot) {
    module.hot.accept('./routes', () => {
      routes = require('./routes').default // eslint-disable-line global-require
      render()
    })
  }
}

render()
