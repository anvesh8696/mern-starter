import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import browserHistory from 'react-router/lib/browserHistory'
import { loginUser } from 'App/actions/user'
import LoginView from '../components/LoginView'

class LoginContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      error: '',
    }

    this.handlSubmit = this.handlSubmit.bind(this)
  }

  handlSubmit(username, password) {
    this.props.dispatch(loginUser(username, password))
      .then(() => {
        // Redirect to user profile page.
        browserHistory.push('/profile')
      })
      .catch((error) => {
        this.setState({
          error,
        })
      })
  }

  render() {
    return (
      <LoginView
        error={this.state.error}
        onSubmit={this.handlSubmit}
      />
    )
  }
}

export default connect()(LoginContainer)
