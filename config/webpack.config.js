const webpack = require('webpack')
const projectConfig = require('./project.config')

let APP_ENTRY = [
  projectConfig.paths.app('index.js'),
]

if (projectConfig.env === 'development') {
  APP_ENTRY.push('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000')
}

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
          'react-hot-loader',
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
