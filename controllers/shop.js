
const Product = require('../models/product')

exports.getProducts = (request, response, next) => {

    Product.getAll((products) => {

        console.log('products', products)

        response.render('shop/product-list', { pageTitle: 'Product', products: products })
    })
}

exports.getIndex = (request, response, next) => {

    Product.getAll((products) => {

        console.log('products', products)

        response.render('shop/index', { pageTitle: 'Shop', products: products })
    })
}

exports.getCart = (request, response, next) => {
    response.render('shop/cart', { pageTitle: 'Cart' })
}

exports.getCheckout = (request, response, next) => {
    response.render('shop/checkout', { pageTitle: 'Checkout' })
}
exports.getOrders = (request, response, next) => {
    response.render('shop/orders', { pageTitle: 'Orders' })
}

exports.getProductById = (request, response, next) => {

    const productId = request.params.productId
    console.log('productId', productId)

    Product.findbyId(productId, (product) => {
        console.log('product', product)
        response.render('shop/product-details', { pageTitle: product.title, product: product})
    })
}