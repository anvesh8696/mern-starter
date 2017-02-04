import React from 'react'
import ReactDOM from 'react-dom'
import AppContainer from './app'

const render = () => {
  const MOUNT_NODE = document.getElementById('app')

  ReactDOM.render(
    <AppContainer />,
    MOUNT_NODE
  )
}

render()
