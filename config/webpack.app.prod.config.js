const webpack = require('webpack')
const extend  = require('extend')
const projectConfig = require('./project.config')
const baseConfig = require('./webpack.base.config')

module.exports = extend(true, {}, baseConfig, {
  entry: {
    app: [
      projectConfig.paths.app('index.js'),
    ],
  },
  plugins: baseConfig.plugins.concat([
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
  ]),
})
