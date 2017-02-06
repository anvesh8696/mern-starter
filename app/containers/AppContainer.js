import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { browserHistory, Router } from 'react-router'

class AppContainer extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    const { store, routes } = this.props

    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          {routes}
        </Router>
      </Provider>
    )
  }
}

export default AppContainer
