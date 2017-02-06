const webpack = require('webpack')
const projectConfig = require('./project.config')

let APP_ENTRY = []

if (projectConfig.env === 'development') {
  APP_ENTRY.push('react-hot-loader/patch')
  APP_ENTRY.push('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000')
}

APP_ENTRY.push(projectConfig.paths.app('index.js'))

module.exports = {
  entry: APP_ENTRY,
  output: {
    filename: 'bundle.js',
    path: projectConfig.paths.dist(),
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader',
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ]
}
