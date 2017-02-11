import express from 'express'

import { isAuthenticated } from './middleware/passport'

import UserController from './controllers/user'

const router = new express.Router()

router.post('/login', UserController.postLogin)
router.get('/logout', UserController.getLogout)
router.post('/profile/password', isAuthenticated, UserController.postChangePassword)

export default router
