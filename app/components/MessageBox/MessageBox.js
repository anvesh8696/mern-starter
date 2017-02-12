import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Message from './Message'

const MessageBox = ({ messages }) => (
  <div>
    {messages.map(message => (
      <Message key={message.messageId} message={message} />
    ))}
  </div>
)

MessageBox.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const mapStateToProps = state => ({
  messages: state.messages,
})

export default connect(mapStateToProps)(MessageBox)
