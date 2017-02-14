import hook from 'css-modules-require-hook'
import cssModulesConfig from 'Config/css-modules.config'
import projectConfig from 'Config/project.config'

hook(cssModulesConfig)

if (projectConfig.globals.__DEV__) { // eslint-disable-line no-underscore-dangle
  // FIXME: require.extensions is deprecated.
  require.extensions['.png'] = () => {}
}

const server = require('./server').default

server.listen(server.get('port'), () => {
  console.log(`Server listening on port ${server.get('port')}.`)

  const seed = require('./seed').default // eslint-disable-line global-require
  seed()
})
