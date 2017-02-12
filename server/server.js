import express from 'express'
import session from 'express-session'
import mongoose from 'mongoose'
import connectMongo from 'connect-mongo'
import passport from 'passport'
import bodyParser from 'body-parser'
import expressValidator from 'express-validator'

import projectConfig from 'Config/project.config'
import serverConfig from './config/server'
import './middleware/passport'
import routes from './routes'

// Create a server.
const app = express()

// Connect to database.
mongoose.Promise = global.Promise
mongoose.connect(serverConfig.DB_URI)
mongoose.connection.once('open', () => {
  console.log('Connected to database.')
})
mongoose.connection.on('error', () => {
  console.log('DB connection error.')
  process.exit()
})

// Configure the server.
app.set('port', projectConfig.port)

app.use(bodyParser.json())
app.use(expressValidator())

// Configure the session
const MongoStore = connectMongo(session)

app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: serverConfig.SESSION_SECRET,
  store: new MongoStore({
    url: serverConfig.DB_URI,
    autoReconnect: true,
  }),
}))

// Configure the passport middleware.
app.use(passport.initialize())
app.use(passport.session())

// For backend API.
app.use('/api', routes)

// Webpack hot loader.
if (projectConfig.globals.__DEV__) { // eslint-disable-line no-underscore-dangle
  app.use(require('./middleware/hot-reload').default) // eslint-disable-line global-require
}

app.use(express.static(projectConfig.dir_dist))
app.use(require('./middleware/render').default)

export default app
