const express = require('express')
const loginController = require('../controllers/login')

const route = express.Router()

route.post('/login', loginController.doLogin)

route.get('/login', loginController.getLogin)

module.exports = route