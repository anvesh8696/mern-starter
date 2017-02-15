import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { filterUserType, filterDate } from 'App/utils'

const ListItem = ({ _id, index, username, type, createdAt }) => (
  <tr>
    <td>{index}</td>
    <td>{username}</td>
    <td>{filterUserType(type)}</td>
    <td>{filterDate(createdAt)}</td>
    <td>
      <Link to={`/users/${_id}`} className="btn btn-info btn-xs">Edit</Link>
    </td>
  </tr>
)

ListItem.propTypes = {
  _id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
}

export default ListItem
