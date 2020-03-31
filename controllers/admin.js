
const Product = require('../models/product')

exports.getProducts = (request, response, next) => {

    Product.getAll((products) => {

        console.log('products', products)

        response.render('admin/product-list', { pageTitle: 'Products', products: products })
    })
}


exports.getAddProduct = (request, response, next) => {

    response.render('admin/add-product', { pageTitle: 'Add product' })
}


exports.saveProduct = (request, response, next) => {

    console.log(request.body)

    const title = request.body.title
    const imageUrl = request.body.imageUrl
    const price = request.body.price
    const description = request.body.description

    const product = new Product(title, imageUrl, price, description)

    product.save()

    response.redirect('/admin/products')

}