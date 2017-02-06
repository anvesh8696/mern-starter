import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'

import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

injectTapEventPlugin()

class AppContainer extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    children: PropTypes.object.isRequired,
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    const { store, children } = this.props

    return (
      <MuiThemeProvider muiTheme={getMuiTheme({userAgent: navigator.userAgent})}>
        <Provider store={store}>
          {children}
        </Provider>
      </MuiThemeProvider>
    )
  }
}

export default AppContainer
