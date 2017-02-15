import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadUsers } from 'App/actions/users'
import ListTable from '../components/ListTable'

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

    return (
      <div>
        <h2>Users</h2>
        <ListTable users={users} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users,
})

export default connect(mapStateToProps)(ListContainer)
