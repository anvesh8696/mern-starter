import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import AppBar from 'material-ui/AppBar'

class AppContainer extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme({userAgent: navigator.userAgent})}>
        <AppBar
          title="MERN Starter"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
      </MuiThemeProvider>
    )
  }
}

export default AppContainer
