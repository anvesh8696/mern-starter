import hook from 'css-modules-require-hook'
import cssModulesConfig from 'Config/css-modules.config'

hook(cssModulesConfig)

const server = require('./server').default

server.listen(server.get('port'), () => {
  console.log(`Server listening on port ${server.get('port')}.`)

  const seed = require('./seed').default // eslint-disable-line global-require
  seed()
})
