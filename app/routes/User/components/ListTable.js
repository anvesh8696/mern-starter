import React, { PropTypes } from 'react'
import ListItem from '../components/ListItem'

const ListTable = ({ users }) => (
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
      {
        users.map((user, index) => (
          // eslint-disable-next-line no-underscore-dangle
          <ListItem key={user._id} index={index + 1} {...user} />
        ))
      }
    </tbody>
  </table>
)

ListTable.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ListTable
