import React from 'react'
import { Route } from 'react-router'
import ProtectedContainer from './ProtectedContainer'
import Logout from './Logout'
import Profile from './Profile'

export default (
  <Route component={ProtectedContainer}>
    {Logout}
    {Profile}
  </Route>
)
