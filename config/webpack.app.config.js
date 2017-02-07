const webpack = require('webpack')
const extend  = require('extend')
const projectConfig = require('./project.config')
const baseConfig = require('./webpack.base.config')

let APP_ENTRY = []

if (projectConfig.env === 'development') {
  APP_ENTRY.push('react-hot-loader/patch')
  APP_ENTRY.push('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000')
}

APP_ENTRY.push(projectConfig.paths.app('index.js'))

module.exports = extend(true, {}, baseConfig, {
  entry: APP_ENTRY,
  output: {
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
})
