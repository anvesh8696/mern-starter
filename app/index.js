import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory, Router } from 'react-router'

import createStore from './store/createStore'
import AppContainer from './containers/AppContainer'
import routes from './routes'

const initialState = window.__INITIAL_STATE__
const store = createStore(initialState)

const MOUNT_NODE = document.getElementById('app')

const render = () => {
  ReactDOM.render(
    <AppContainer store={store}>
      <Router history={browserHistory}>
        {routes}
      </Router>
    </AppContainer>,
    MOUNT_NODE
  )
}

render()
