import passport from 'passport'

const postLogin = (req, res, next) => {
  req.assert('username', 'Username cannot be blank.').notEmpty()
  req.assert('password', 'Password cannot be blank.').notEmpty()

  req.getValidationResult().then((result) => { // eslint-disable-line consistent-return
    if (!result.isEmpty()) {
      // Return an array of validation error messages.
      const message = result.useFirstErrorOnly().array().map(error => error.msg)
      return res.status(400).json({ message })
    }

    passport.authenticate('local', (err, user, info) => { // eslint-disable-line consistent-return
      if (err) {
        return next(err)
      }

      if (!user) {
        return res.status(401).json(info)
      }

      req.logIn(user, (err) => { // eslint-disable-line no-shadow
        if (err) {
          return next(err)
        }

        return res.status(200).json({ message: 'success' })
      })
    })(req, res, next)
  })
}

const getLogout = (req, res) => {
  req.logout()
  return res.status(200).json({ message: 'success' })
}

export default {
  postLogin,
  getLogout,
}
