const Product = require('../schemas/productSchema.js')
const mongoose = require('mongoose')

exports.createProduct = async (req, res) => {
    try {
        const newProduct = {
            productName: productName,
            price: price,
            description: description,
            category: category,
            images: images 
        } = req.body
        if(!productName || !price || !description || !category || !images) {
            res.status(400).json({ message: 'You need to enter all fields'})
        }

        Product.create({ productName, price, description, category, images })
        .then(product => {
            res.status(200).json(product)
        })
        
    } catch (err) {
        console.log(err.message)
        res.status(400).json({ message: 'Something went wrong!'})
    }
}

exports.getAllProducts = async (req, res) => {
    // res.status(200).json({ message: 'Get all products '})

    try {
        Product.find()
        .then(product => {
            res.status(200).json(product)
        })
    } catch (err) {
        res.json({message: err.message})
    }
}

exports.getProductById = async (req, res) => {
    if(!mongoose.isValidObjectId(req.params.id)) {
        return res.status(400).json({ message: 'Object ID is not registered'})
    }
    Product.findById(req.params.id)
    .then(product => {
        if(!product) {
            return res.status(404).json({ message: 'Not found'})
        }
        res.status(200).json(product)
    })
}

exports.updateProduct = async (req, res) => {
    // res.status(200).json({ message: 'Update product'})

    try {
        const id = req.params.id
        if(!mongoose.isValidObjectId(id)) {
            res.status(400)
            throw new Error('You need to enter a valid product id')
        }
        const product =  await Product.findByIdAndUpdate(id, req.body, { new: true } )

        if(!product) {
            res.status(404)
            throw new Error('Product not found')
        }
        
        res.status(200).json(product)
        
    } catch (err) {
        res.json({ message: err.message })
    }

}

exports.deleteProduct = async (req, res) => {
    // res.status(200).json({ message: 'Delete product'})
    try {
        const id = req.params.id
        if(!mongoose.isValidObjectId(id)) {
            res.status(400)
            throw new Error('You need to enter a valid product id')
        }

        const product = await Product.findByIdAndDelete(id)

        if(!product) {
            res.status(404)
            throw new Error('Product not found')
        }
        res.status(200).json( product._id)
    } catch (err) {
        res.json({ message: err.message })
    }
}
