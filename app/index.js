import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader' // eslint-disable-line import/no-extraneous-dependencies

import createStore from './store/createStore'
import App from './containers/App'

import projectConfig from '../config/project.config'

const initialState = window.__INITIAL_STATE__ // eslint-disable-line no-underscore-dangle
const store = createStore(initialState)

const MOUNT_NODE = document.getElementById('app')

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <App store={store} />
    </AppContainer>,
    MOUNT_NODE // eslint-disable-line comma-dangle
  )
}

if (projectConfig.env === 'development') {
  if (module.hot) {
    module.hot.accept('./containers/App', () => {
      const NextApp = require('./containers/App').default // eslint-disable-line global-require
      ReactDOM.render(
        <AppContainer>
          <NextApp store={store} />
        </AppContainer>,
        MOUNT_NODE // eslint-disable-line comma-dangle
      )
    })
  }
}

render()
