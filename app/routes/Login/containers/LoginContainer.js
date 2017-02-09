import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
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

  handlSubmit(username, password) {
    this.props.onLogin(username, password)
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
  onLogin: (username, password) => {
    dispatch(loginUser(username, password))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
