import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { hideMessage } from '../../actions/messages'

class Message extends Component {
  static propTypes = {
    message: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)

    this.onDismiss = this.onDismiss.bind(this)
  }

  onDismiss(event) {
    event.preventDefault()

    this.props.dispatch(hideMessage(this.props.message.messageId))
  }

  render() {
    const { message } = this.props.message
    return (
      <div className="alert alert-info" role="alert">
        <button type="button" className="close" aria-label="Close" onClick={this.onDismiss}>
          <span aria-hidden="true">&times;</span>
        </button>
        {message}
      </div>
    )
  }
}

export default connect()(Message)
