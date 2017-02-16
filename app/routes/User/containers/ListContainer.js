import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Link from 'react-router/lib/Link'
import { loadUsers, deleteUser } from 'App/actions/users'
import ListTable from '../components/ListTable'

class ListContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    users: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  constructor(props) {
    super(props)

    this.onDelete = this.onDelete.bind(this)
  }

  componentDidMount() {
    this.props.dispatch(loadUsers())
  }

  onDelete(id) {
    this.props.dispatch(deleteUser(id))
  }

  render() {
    const { users } = this.props

    return (
      <div>
        <h2>Users</h2>
        <div className="clearfix">
          <Link to="users/add" className="btn btn-primary btn-sm pull-right">Add New User</Link>
        </div>
        <ListTable users={users} onDelete={this.onDelete} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users,
})

export default connect(mapStateToProps)(ListContainer)
