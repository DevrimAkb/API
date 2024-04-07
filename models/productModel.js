const Product = require('../schemas/productSchema.js')

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
            res.status(201).json(product)
        })
        
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ message: 'Something went wrong!'})
    }
}

exports.getAllProducts = async (req, res) => {
    // res.status(200).json({ message: 'Get all products '})

    try {
        Product.find()
        .then(data => {
            res.status(200).json(data)
        })
    } catch (err) {
        res.json({message: err.message})
    }
}

exports.getProductById = async (req, res) => {

}

exports.updateProduct = async (req, res) => {
    res.status(200).json({ message: 'Update product'})

}

exports.deleteProduct = async (req, res) => {
    res.status(200).json({ message: 'Delete product'})
}
