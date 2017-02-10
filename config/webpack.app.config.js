const webpack = require('webpack')
const extend  = require('extend')
const projectConfig = require('./project.config')
const baseConfig = require('./webpack.base.config')

const __DEV__ = projectConfig.globals.__DEV__
const __PROD__ = projectConfig.globals.__PROD__

let APP_ENTRY = []
let PLUGINS = baseConfig.plugins

if (__DEV__) {
  APP_ENTRY.push(
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000'
  )

  PLUGINS.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )
} else if (__PROD__) {
  PLUGINS.push(
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false,
      },
      output: {
        comments: false,
      },
    })
  )
}

APP_ENTRY.push(projectConfig.paths.app('index.js'))

module.exports = extend(true, {}, baseConfig, {
  entry: {
    app: APP_ENTRY
  },
  output: {
    filename: '[name].js',
  },
  plugins: PLUGINS,
})
