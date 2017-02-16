import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import browserHistory from 'react-router/lib/browserHistory'
import { addUser, updateUser } from 'App/actions/users'
import { getUser } from 'App/actions/userUpdated'
import EditView from '../components/EditView'

class EditContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      error: '',
    }

    this.isAdding = props.params.id === undefined

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    if (!this.isAdding) {
      this.props.dispatch(getUser(this.props.params.id))
    }
  }

  handleSubmit(user) {
    let promise
    if (this.isAdding) {
      promise = this.props.dispatch(addUser(user))
    } else {
      promise = this.props.dispatch(updateUser(this.props.params.id, user))
    }

    promise.then(() => {
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
    const { user } = this.props

    return (
      <div>
        <div className="page-header">
          <h2>
            {this.isAdding ? 'Add New User' : `Edit User - ${user.username}`}
          </h2>
        </div>
        <EditView
          isAdding={this.isAdding}
          user={user}
          error={this.state.error}
          onSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.userUpdated,
})

export default connect(mapStateToProps)(EditContainer)
