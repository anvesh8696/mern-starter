import express from 'express'

import projectConfig from '../config/project.config'

import hotReload from './middleware/hot-reload'
import renderApp from './middleware/render'

const app = express()

app.use(hotReload)
app.use(express.static(projectConfig.dir_dist))
app.use(renderApp)

app.listen(projectConfig.port, () => {
  console.log(`Server listening on port ${projectConfig.port}.`)
})
