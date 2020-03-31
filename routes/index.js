const express = require('express')

const route = express.Router()

route.get('/', (request, response, next) => {

    response.render('index', {pageTitle: 'My Express'})
})


module.exports = route