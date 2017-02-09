import { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { logoutUser } from '../../../../store/user'

class LogoutContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.dispatch(logoutUser())
      .then(() => {
        // Redirect to home page.
        browserHistory.push('/')
      })
  }

  render() {
    return false
  }
}

export default connect()(LogoutContainer)
