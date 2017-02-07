import React, { Component, PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import LoginStyle from '../style.scss'

class LoginView extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      touched: {
        username: false,
        password: false,
      },
    }

    this.handleChangeUsername = this.handleChangeUsername.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  validate() {
    const { username, password } = this.state
    const errors = {}

    if (!username.length) {
      errors.username = 'Username is required.'
    }

    if (!password.length) {
      errors.password = 'Password is required.'
    }

    if (Object.keys(errors).length) {
      return errors
    }

    return true
  }

  handleChangeUsername(event) {
    this.setState({
      username: event.target.value,
    })
  }

  handleChangePassword(event) {
    this.setState({
      password: event.target.value,
    })
  }

  handleBlur = field => () => (
    this.setState({
      touched: {
        ...this.state.touched,
        [field]: true,
      },
    })
  )

  handleSubmit(event) {
    event.preventDefault()
    if (this.validate() !== true) {
      return
    }

    const { onSubmit } = this.props

    onSubmit(this.state.username, this.state.password)
  }

  render() {
    const errors = this.validate()
    const isSubmitDisabled = errors !== true

    const shouldMarkError = field => (
      errors[field] ? this.state.touched[field] : false
    )

    return (
      <div className="row">
        <div className="col-sm-6 col-sm-offset-3">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Login</h3>
            </div>
            <div className="panel-body">
              <form className="form-horizontal" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username" className="col-sm-3 control-label">Username</label>
                  <div className={`col-sm-9 ${shouldMarkError('username') ? 'has-error' : ''}`}>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Username"
                      value={this.state.username}
                      onChange={this.handleChangeUsername}
                      onBlur={this.handleBlur('username')}
                    />
                    <p className={`text-danger ${LoginStyle.noMb} ${shouldMarkError('username') ? 'show' : 'hidden'}`}>
                      {errors.username}
                    </p>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="col-sm-3 control-label">Password</label>
                  <div className={`col-sm-9 ${shouldMarkError('password') ? 'has-error' : ''}`}>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={this.handleChangePassword}
                      onBlur={this.handleBlur('password')}
                    />
                    <p className={`text-danger ${LoginStyle.noMb} ${shouldMarkError('password') ? 'show' : 'hidden'}`}>
                      {errors.password}
                    </p>
                  </div>
                </div>
                <div className={`form-group ${LoginStyle.noMb}`}>
                  <div className="col-sm-9 col-sm-offset-3">
                    <button type="submit" className="btn btn-default" disabled={isSubmitDisabled}>Login</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(LoginStyle)(LoginView)
