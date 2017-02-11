import express from 'express'

import UserController from './controllers/user'

const router = new express.Router()

router.post('/login', UserController.postLogin)
router.get('/logout', UserController.getLogout)

export default router
