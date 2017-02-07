import { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { logoutUser } from '../../../store/user'

class LogoutContainer extends Component {
  static propTypes = {
    onLogout: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.onLogout()
    browserHistory.push('/')
  }

  render() {
    return false
  }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  onLogout: () => {
    dispatch(logoutUser())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(LogoutContainer)
