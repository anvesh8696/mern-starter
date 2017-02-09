import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { loginUser } from '../../../store/user'
import LoginView from '../components/LoginView'

class LoginContainer extends Component {
  static propTypes = {
    onLogin: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      error: '',
    }

    this.handlSubmit = this.handlSubmit.bind(this)
  }

  handlSubmit(username, password) {
    this.props.onLogin(username, password)
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

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  onLogin: (username, password) => (
    dispatch(loginUser(username, password))
  ),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
