import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack.config'
import AppContainer from '../app/app'

const app = express()

const port = process.env.PORT || 8000

const handleRender = (req, res) => {
  const html = renderToString(
    <AppContainer />
  )

  res.send(renderFullPage(html))
}

const renderFullPage = (html) => {
  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="mobile-web-app-capable" content="yes">
        <title>MERN Starter</title>
      </head>
      <body>
        <div id="app" style="height: 100%">${html}</div>
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
