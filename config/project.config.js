const path = require('path')

const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 8000,

  path_base: path.resolve(__dirname, '..'),
  dir_app: 'app',
  dir_dist: 'dist',
  dir_server: 'server',
}

function base() {
  const args = [config.path_base].concat([].slice.call(arguments))
  return path.resolve.apply(path, args)
}

config.paths = {
  base: base,
  app: base.bind(null, config.dir_app),
  dist: base.bind(null, config.dir_dist),
}

module.exports = config
