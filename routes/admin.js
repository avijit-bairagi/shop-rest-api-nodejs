const express = require('express')
const adminController = require('../controllers/admin')

const route = express.Router()

route.get('/admin/products', adminController.getProducts)

route.get('/admin/add-product', adminController.getAddProduct)

route.post('/admin/add-product', adminController.saveProduct)

module.exports = route