import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadUsers } from 'App/actions/users'
import ListItem from '../components/ListItem'

class ListContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    users: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  componentDidMount() {
    this.props.dispatch(loadUsers())
  }

  render() {
    const { users } = this.props

    const items = users.map((user, index) => (
      // eslint-disable-next-line no-underscore-dangle
      <ListItem key={user._id} index={index + 1} {...user} />
    ))

    return (
      <div>
        <h2>Users</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>No.</th>
              <th>Username</th>
              <th>Type</th>
              <th>Created At</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {items}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users,
})

export default connect(mapStateToProps)(ListContainer)
