const projectConfig = require('./project.config')

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
        use: [
          {
            loader: 'isomorphic-style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true,
              modules: true,
              minimize: false,
              localIdentname: '[name]-[local]-[hash:base64:5]',
              discardComments: {
                removeAll: true,
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              config: './config/postcss.config.js',
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
}
