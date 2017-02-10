import React from 'react'
import { Route } from 'react-router'
import NotFoundView from './components/NotFoundView'

export default (
  <Route path="*" component={NotFoundView} />
)
