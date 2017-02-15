import React, { PropTypes } from 'react'

const EditContainer = ({ params }) => (
  <div>
    <h2>User #{params.id}</h2>
  </div>
)

EditContainer.propTypes = {
  params: PropTypes.object.isRequired,
}

export default EditContainer
