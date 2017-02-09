import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'

const ContextType = {
  insertCss: PropTypes.func.isRequired,
}

class AppContainer extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    context: PropTypes.shape(ContextType).isRequired,
    children: PropTypes.object.isRequired,
  }

  static childContextTypes = ContextType

  getChildContext() {
    return this.props.context
  }

  render() {
    return (
      <Provider store={this.props.store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default AppContainer
