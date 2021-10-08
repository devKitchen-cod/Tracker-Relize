
const express = require('express')
const router = express.Router()


const userController = require('../controller/auth-controller')
const trackcontroller = require('../controller/track-controller')
const loginController = require('../controller/login-controller')
const projController = require('../controller/projects-controller')

router.post('/user', userController.createUser)
router.post('/project', trackcontroller.createProject)
router.post('/tracker', trackcontroller.trackContrl)
router.post('/login', loginController.loginUser)
router.post('/allproj', projController.getProject)

module.exports = router
