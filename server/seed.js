import User from './models/User'
import serverConfig from './config/server'

export default () => {
  User.count({}, (err, count) => {
    if (err) {
      // Silence.
      return
    }

    // If there is no user, create a default one.
    if (!count) {
      console.log('Creating a default user account.')
      const user = new User({
        username: serverConfig.DEFAULT_USER.username,
        password: serverConfig.DEFAULT_USER.password,
      })
      user.save()
    }
  })
}