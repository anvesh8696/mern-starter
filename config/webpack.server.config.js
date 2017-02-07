const webpack  = require('webpack')
const extend  = require('extend')
const projectConfig = require('./project.config')
const baseConfig = require('./webpack.base.config')

const __DEV__ = projectConfig.globals.__DEV__
const __PROD__ = projectConfig.globals.__PROD__

module.exports = extend(true, {}, baseConfig, {
  entry: [
    projectConfig.paths.server('index.js'),
  ],
  output: {
    filename: 'server.js',
    libraryTarget: 'commonjs2',
  },
  target: 'node',
  externals: [
    (context, request, callback) => {
      const isExternal =
        request.match(/^[@a-z][a-z/.\-0-9]*$/i) &&
        !request.match(/\.(css|scss)$/i)
      callback(null, Boolean(isExternal))
    },
  ],
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': __DEV__ ? '"development"' : '"production"',
    })
  ],
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
  },
})
