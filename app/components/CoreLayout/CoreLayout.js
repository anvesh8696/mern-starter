import React, { PropTypes } from 'react'
import Header from '../../components/Header'
import MessageBox from '../../components/MessageBox'

const CoreLayout = ({ children }) => (
  <div className="container">
    <Header />
    <MessageBox />
    {children}
  </div>
)

CoreLayout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default CoreLayout
