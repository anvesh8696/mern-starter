import React from 'react'
import { Route, IndexRoute } from 'react-router'
import CoreLayout from '../components/CoreLayout'
import Home from './Home'
import Feature from './Feature'
import Login from './Login'
import Protected from './Protected'

export default (
  <Route path="/" component={CoreLayout}>
    <IndexRoute component={Home} />
    {Feature}
    {Login}
    {Protected}
  </Route>
)
