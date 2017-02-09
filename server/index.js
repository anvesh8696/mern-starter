import express from 'express'

import projectConfig from '../config/project.config'

import renderApp from './middleware/render'

const app = express()

if (projectConfig.env === 'development') {
  app.use(require('./middleware/hot-reload').default) // eslint-disable-line global-require
}

app.use(express.static(projectConfig.dir_dist))
app.use(renderApp)

app.listen(projectConfig.port, () => {
  console.log(`Server listening on port ${projectConfig.port}.`)
})
