const express = require('express')
const userController = require('../controllers/users')

const route = express.Router()


route.get('/user', userController.getUser)

route.get('/users', userController.getAllUser)

module.exports = route