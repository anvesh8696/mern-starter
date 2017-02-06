import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { browserHistory, Router } from 'react-router'

import routes from '../routes'

const App = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>
)

App.propTypes = {
  store: PropTypes.object.isRequired,
}

export default App
