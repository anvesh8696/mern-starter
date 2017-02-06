import React from 'react'
import { Route, IndexRoute } from 'react-router'
import CoreLayout from '../layouts/CoreLayout'
import Home from './Home'
import Feature from './Feature'

export default (
  <Route path="/" component={CoreLayout}>
    <IndexRoute component={Home} />
    <Route path="/features" component={Feature} />
  </Route>
)
