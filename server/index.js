import express from 'express'

import webpack from 'webpack' // eslint-disable-line import/no-extraneous-dependencies
import webpackDevMiddleware from 'webpack-dev-middleware' // eslint-disable-line import/no-extraneous-dependencies
import webpackHotMiddleware from 'webpack-hot-middleware' // eslint-disable-line import/no-extraneous-dependencies

import projectConfig from '../config/project.config'
import webpackAppConfig from '../config/webpack.app.config'

import handleRender from './middleware/render'

const app = express()

const compiler = webpack(webpackAppConfig)

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  lazy: false,
  publicPath: webpackAppConfig.output.publicPath,
}))

app.use(webpackHotMiddleware(compiler, {
  path: '/__webpack_hmr',
  heartbeat: 10000,
}))

app.use(express.static(projectConfig.dir_dist))
app.use(handleRender)

app.listen(projectConfig.port, () => {
  console.log(`Server listening on port ${projectConfig.port}.`)
})
