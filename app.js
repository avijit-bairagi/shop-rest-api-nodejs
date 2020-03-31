const express = require('express')
const parser = require('body-parser')
const path = require('path')

const homeRoute = require('./routes/index')
const loginRoute = require('./routes/login')
const userRoute = require('./routes/user')
const adminRoute = require('./routes/admin')
const shopRoute = require('./routes/shop')

const errorController = require('./controllers/errors')

const port = 3000

const app = express()
app.listen(port, () => console.log(`Express app listening on port ${port}!`))
app.use(parser.urlencoded())
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(loginRoute)
app.use(userRoute)
app.use(adminRoute)
app.use(shopRoute)
app.use(homeRoute)

app.use(errorController.get404Page)