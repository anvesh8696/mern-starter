import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import AppContainer from './app'

injectTapEventPlugin()

const render = () => {
  const MOUNT_NODE = document.getElementById('app')

  ReactDOM.render(
    <AppContainer />,
    MOUNT_NODE
  )
}

render()
