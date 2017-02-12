import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { loginUser } from '../../../actions/users'
import LoginView from '../components/LoginView'

class LoginContainer extends Component {
  static propTypes = {
    user: PropTypes.object,
    dispatch: PropTypes.func.isRequired,
  }

  static defaultProps = {
    user: null,
  }

  constructor(props) {
    super(props)

    this.state = {
      error: '',
    }

    this.handlSubmit = this.handlSubmit.bind(this)
  }

  componentDidMount() {
    if (this.props.user) {
      browserHistory.push('/profile')
    }
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
    if (this.props.user) {
      return false
    }
    return (
      <LoginView
        error={this.state.error}
        onSubmit={this.handlSubmit}
      />
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
})

export default connect(mapStateToProps)(LoginContainer)
