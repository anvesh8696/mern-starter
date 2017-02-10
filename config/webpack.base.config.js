const webpack = require('webpack')
const projectConfig = require('./project.config')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  output: {
    path: projectConfig.paths.dist(),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract([
          'css-loader?modules&importLoaders=1&sourceMap&localIdentName=[path]-[name]-[local]-[hash:base64:5]',
          'postcss-loader?config=./config/postcss.config.js',
          'sass-loader?sourceMap&outputStyle=expanded'])
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': projectConfig.globals.__DEV__ ? '"development"' : '"production"',
    }),
  ],
}
