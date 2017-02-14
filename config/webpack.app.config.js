const webpack = require('webpack')
const extend  = require('extend')
const projectConfig = require('./project.config')
const baseConfig = require('./webpack.base.config')

let entry
let plugins

if (projectConfig.globals.__DEV__) {
  entry = [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    projectConfig.paths.app('index.js'),
  ]

  plugins = [
    new webpack.HotModuleReplacementPlugin(),
  ]
} else {
  entry = [
    projectConfig.paths.app('index.js'),
  ]

  plugins = [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false,
      },
      output: {
        comments: false,
      },
    }),
  ]
}

module.exports = extend(true, {}, baseConfig, {
  entry: {
    app: entry,
  },
  plugins: baseConfig.plugins.concat(plugins),
})
