import bcrypt from 'bcrypt-nodejs'
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  password: String,
}, {
  timestamps: true,
})

/**
 * Password hash middleware.
 */
userSchema.pre('save', function save(next) { // eslint-disable-line consistent-return
  const user = this
  if (!user.isModified('password')) {
    return next()
  }

  bcrypt.genSalt(10, (err, salt) => { // eslint-disable-line consistent-return
    if (err) {
      return next(err)
    }

    bcrypt.hash(user.password, salt, null, (err, hash) => { // eslint-disable-line
      if (err) {
        return next(err)
      }
      user.password = hash
      next()
    })
  })
})

/**
 * Helper method for validating user's password
 */
userSchema.methods.checkPassword = function checkPassword(plain, cb) {
  bcrypt.compare(plain, this.password, (err, isMatch) => {
    cb(err, isMatch)
  })
}

const User = mongoose.model('User', userSchema)

export default User
