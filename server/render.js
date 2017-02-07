import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'

import createStore from '../app/store/createStore'
import routes from '../app/routes'
import RootContainer from '../app/containers/RootContainer'

const renderFullPage = (html, css, preloadedState) => (
  `
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="mobile-web-app-capable" content="yes">
      <title>MERN Starter</title>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
      <style type="text/css">${[...css].join('')}</style>
    </head>
    <body>
      <div id="root" style="height: 100%">${html}</div>
      <script>
        window.__INITIAL_STATE__ = ${JSON.stringify(preloadedState)}
      </script>
      <script type="text/javascript" src="bundle.js"></script>
    </body>
  </html>
  `
)

const handleRender = (req, res, next) => {
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

    const css = new Set()

    const context = {
      insertCss: (...styles) => {
        // eslint-disable-next-line no-underscore-dangle
        styles.forEach(style => css.add(style._getCss()))
      },
    }

    const initialState = {}
    const store = createStore(initialState)

    const html = renderToString(
      <RootContainer store={store} context={context}>
        <RouterContext {...renderProps} />
      </RootContainer> // eslint-disable-line comma-dangle
    )

    const preloadedState = store.getState()

    res.send(renderFullPage(html, css, preloadedState))
  })
}

export default handleRender
