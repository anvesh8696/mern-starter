import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { addUser } from 'App/actions/users'
import EditView from '../components/EditView'

class EditContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      error: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(user) {
    this.props.dispatch(addUser(user))
      .then(() => {
        // Redirect to users page.
        browserHistory.push('/users')
      })
      .catch((error) => {
        this.setState({
          error,
        })
      })
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <h2>Add New User</h2>
        </div>
        <EditView
          error={this.state.error}
          onSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default connect()(EditContainer)
