import React from 'react'
import { connect } from 'react-redux'
import { IndexLink, Link } from 'react-router'

const Header = ({ user }) => ( // eslint-disable-line react/prop-types
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#top-menu" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <IndexLink to="/" className="navbar-brand">MERN Starter</IndexLink>
      </div>
      <div className="collapse navbar-collapse" id="top-menu">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/features">Features</Link>
          </li>
        </ul>
        {
          user ? (
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/profile">
                  Hello {user.username}
                </Link>
              </li>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </ul>
          ) : (
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          )
        }
      </div>
    </div>
  </nav>
)

const mapStateToProps = state => ({
  user: state.user,
})

export default connect(mapStateToProps)(Header)
