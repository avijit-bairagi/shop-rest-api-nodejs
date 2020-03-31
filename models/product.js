const rootDir = require('../utils/path')
const path = require('path')
const fs = require('fs')

const p = path.join(rootDir, 'data', 'products.json')

const getAllProductFromFile = callback => {
    fs.readFile(p, (err, content) => {

        if (err) {
            console.log('error', err)
            callback([])
        } else {
            console.log('content', content)
            callback(JSON.parse(content))
        }
    })
}

module.exports = class Product {

    constructor(title, imageUrl, price, desc) {

        this.id = new Date().getTime().toString()
        this.title = title
        this.imageUrl = imageUrl
        this.price = price
        this.desc = desc
    }

    save() {

        getAllProductFromFile((products) => {
            products.push(this)
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err)
            })
        })
    }

    static getAll(callback) {

        getAllProductFromFile(callback)
    }

    static findbyId(id, callback) {

        getAllProductFromFile((products) => {

            const product = products.find(p => p.id === id)
            callback(product)
        })
    }
}