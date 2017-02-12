require('babel-register')({
  only: [/app/, /config/, /server/, /test/],
})
require('babel-polyfill')

const hook = require('css-modules-require-hook')
const cssModulesConfig = require('../../config/css-modules.config')

hook(cssModulesConfig)
