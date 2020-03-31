const session = require('sessionstorage')
const User = require('../models/user')

exports.getUser = (request, response, next) => {

    let user = session.getItem('user')

    response.render('profile', {pageTitle: 'Profile', user: user})
}

exports.getAllUser = (request, response, next) => {

    let users = User.getAll()

    let user = session.getItem('user')

    console.log(users, user)

    response.render('profile', {pageTitle: 'Profile', user: user})
}