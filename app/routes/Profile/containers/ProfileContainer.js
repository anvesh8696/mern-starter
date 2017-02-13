import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { changePassword } from 'App/actions/users'
import ProfileView from '../components/ProfileView'

class ProfileContainer extends Component {
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

  handlSubmit(password) {
    this.props.dispatch(changePassword(password))
      .then(() => {
        // TODO: Do something.
      })
      .catch((error) => {
        this.setState({
          error,
        })
      })
  }

  render() {
    return (
      <ProfileView
        error={this.state.error}
        onSubmit={this.handlSubmit}
      />
    )
  }
}

export default connect()(ProfileContainer)
