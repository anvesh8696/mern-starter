import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import LoginStyle from '../style.scss'

const LoginView = () => (
  <div className="row">
    <div className="col-sm-6 col-sm-offset-3">
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Login</h3>
        </div>
        <div className="panel-body">
          <form className="form-horizontal">
            <div className="form-group">
              <label htmlFor="username" className="col-sm-3 control-label">Username</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" id="username" placeholder="Username" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="password" className="col-sm-3 control-label">Password</label>
              <div className="col-sm-9">
                <input type="password" className="form-control" id="password" placeholder="Password" />
              </div>
            </div>
            <div className={`form-group ${LoginStyle.noMb}`}>
              <div className="col-sm-9 col-sm-offset-3">
                <button type="submit" className="btn btn-default">Login</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
)

export default withStyles(LoginStyle)(LoginView)
