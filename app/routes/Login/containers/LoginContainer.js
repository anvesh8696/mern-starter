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

    this.handlSubmit = this.handlSubmit.bind(this)
  }

  handlSubmit(username, password) { // eslint-disable-line no-unused-vars
    // TODO: Do user authentication.
    this.props.onLogin({
      username,
    })

    browserHistory.push('/profile')
  }

  render() {
    return (
      <LoginView
        onSubmit={this.handlSubmit}
      />
    )
  }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  onLogin: (user) => {
    dispatch(loginUser(user))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
