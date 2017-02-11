import React, { PropTypes } from 'react'
import Header from '../../components/Header'
import Messages from '../../components/Messages'

const CoreLayout = ({ children }) => (
  <div className="container">
    <Header />
    <Messages />
    {children}
  </div>
)

CoreLayout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default CoreLayout
