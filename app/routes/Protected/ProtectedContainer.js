import { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

class ProtectedContainer extends Component {
  static propTypes = {
    user: PropTypes.object,
  }

  static defaultProps = {
    user: null,
  }

  componentDidMount() {
    if (!this.props.user) {
      browserHistory.push('/login')
    }
  }

  render() {
    if (this.props.user) {
      return this.props.children // eslint-disable-line react/prop-types
    }
    return false
  }
}

const mapStateToProps = state => ({
  user: state.user,
})

export default connect(mapStateToProps)(ProtectedContainer)
