const session = require('sessionstorage')
const User = require('../models/user')

exports.doLogin = (request, response, next) => {
    
    console.log(request.body)

    let user = new User(request.body.email, request.body.password)

    user.save()

    session.setItem('user', user)

    response.redirect('/user')
}

exports.getLogin = (request, response, next) => {
    response.render('login', {pageTitle: 'Login'})
}