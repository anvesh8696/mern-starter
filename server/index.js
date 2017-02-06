import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router';

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack.config'

import createStore from '../app/store/createStore'
import routes from '../app/routes'
import AppContainer from '../app/containers/AppContainer'

const app = express()

const port = process.env.PORT || 8000

const handleRender = (req, res, next) => {
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

    global.navigator = {
      userAgent: req.headers['user-agent']
    };

    const initialState = {}
    const store = createStore(initialState)

    const html = renderToString(
      <AppContainer store={store}>
        <RouterContext {...renderProps} />
      </AppContainer>
    )

    const preloadedState = store.getState()

    res.send(renderFullPage(html, preloadedState))
  })
}

const renderFullPage = (html, preloadedState) => {
  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="mobile-web-app-capable" content="yes">
        <title>MERN Starter</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
      </head>
      <body>
        <div id="app" style="height: 100%">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(preloadedState)}
        </script>
        <script type="text/javascript" src="bundle.js"></script>
      </body>
    </html>
  `
}

app.use(express.static('dist'))

const compiler = webpack(webpackConfig)

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}))

app.use(webpackHotMiddleware(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10000
}))

app.use(handleRender)

app.listen(port, () => {
  console.log(`Server listening on port ${port}.`)
});
