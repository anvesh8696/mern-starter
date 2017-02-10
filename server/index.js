import express from 'express'
import hook from 'css-modules-require-hook'

import projectConfig from '../config/project.config'
import cssModulesConfig from '../config/css-modules.config'
import renderApp from './middleware/render'

hook(cssModulesConfig)

const app = express()

if (projectConfig.globals.__DEV__) { // eslint-disable-line no-underscore-dangle
  app.use(require('./middleware/hot-reload').default) // eslint-disable-line global-require
}

app.use(express.static(projectConfig.dir_dist))
app.use(renderApp)

app.listen(projectConfig.port, () => {
  console.log(`Server listening on port ${projectConfig.port}.`)
})
