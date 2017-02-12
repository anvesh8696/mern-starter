import React from 'react'
import { Route, IndexRoute } from 'react-router'
import CoreLayout from '../components/CoreLayout'
import Home from './Home'
import Feature from './Feature'
import Login from './Login'
import Logout from './Logout'
import Profile from './Profile'
import NotFound from './NotFound'

export default (store) => {
  const requireGuest = (nextState, replace, callback) => {
    const { user } = store.getState()
    if (user) {
      replace({
        pathname: '/profile',
      })
    }
    callback()
  }

  const requireAuth = (nextState, replace, callback) => {
    const { user } = store.getState()
    if (!user) {
      replace({
        pathname: '/login',
      })
    }
    callback()
  }

  return (
    <Route path="/" component={CoreLayout}>
      <IndexRoute component={Home} />
      <Route path="features" component={Feature} />
      <Route path="login" component={Login} onEnter={requireGuest} />
      <Route onEnter={requireAuth}>
        <Route path="logout" component={Logout} />
        <Route path="profile" component={Profile} />
      </Route>
      <Route path="*" component={NotFound} />
    </Route>
  )
}
