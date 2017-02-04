import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class AppContainer extends Component {
  render() {
    return <div>Hello MERN!</div>;
  }
}

const MOUNT_NODE = document.getElementById('app')

ReactDOM.render(
  <AppContainer />,
  MOUNT_NODE
)
