import React from 'react'
import { Link } from 'react-router';

export default () => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#top-menu" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <Link to="/" className="navbar-brand">MERN Starter</Link>
      </div>
      <div className="collapse navbar-collapse" id="top-menu">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/features">Features</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)
