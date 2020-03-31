const express = require('express')
const shopController = require('../controllers/shop')

const route = express.Router()

route.get('/home', shopController.getIndex)
route.get('/products', shopController.getProducts)
route.get('/products/:productId', shopController.getProductById)
route.get('/cart', shopController.getCart)
route.get('/checkout', shopController.getCheckout)
route.get('/orders', shopController.getOrders)

module.exports = route