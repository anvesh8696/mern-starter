import React, { PropTypes } from 'react'

const Alert = ({ message }) => (
  <div className="alert alert-info" role="alert">
    <button type="button" className="close" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    {message.message}
  </div>
)

Alert.propTypes = {
  message: PropTypes.object.isRequired,
}

export default Alert
