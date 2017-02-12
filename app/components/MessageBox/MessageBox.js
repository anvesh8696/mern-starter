import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { hideMessage } from 'App/actions/messages'
import Message from './Message'

class MessageBox extends Component {
  static propTypes = {
    messages: PropTypes.arrayOf(PropTypes.object).isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  handleDismiss = (messageId) => {
    this.props.dispatch(hideMessage(messageId))
  }

  render() {
    const { messages } = this.props

    return (
      <div>
        {messages.map(message => (
          <Message key={message.messageId} message={message} onDismiss={this.handleDismiss} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  messages: state.messages,
})

export default connect(mapStateToProps)(MessageBox)
