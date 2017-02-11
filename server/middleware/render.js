import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'

import createStore from '../../app/store/createStore'
import routes from '../../app/routes'
import AppContainer from '../../app/containers/AppContainer'

const renderFullPage = (html, preloadedState) => (
  `
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="mobile-web-app-capable" content="yes">
      <title>MERN Starter</title>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
      <link rel="stylesheet" href="app.css">
    </head>
    <body>
      <div id="root" style="height: 100%">${html}</div>
      <script>
        window.__INITIAL_STATE__ = ${JSON.stringify(preloadedState)}
      </script>
      <script type="text/javascript" src="app.js"></script>
    </body>
  </html>
  `
)

const renderApp = (req, res, next) => {
  // eslint-disable-next-line consistent-return
  match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
    if (err) {
      return res.status(500)
    }

    if (redirectLocation) {
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    }

    if (!renderProps) {
      return next()
    }

    const initialState = {}

    if (req.isAuthenticated()) {
      initialState.user = {
        username: req.user.username,
      }
    }

    const store = createStore(initialState)

    const html = renderToString(
      <AppContainer store={store}>
        <RouterContext {...renderProps} />
      </AppContainer> // eslint-disable-line comma-dangle
    )

    const preloadedState = store.getState()

    res.send(renderFullPage(html, preloadedState))
  })
}

export default renderApp
