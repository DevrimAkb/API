const Product = require('../schemas/productSchema.js')

exports.createProduct = async (req, res) => {
    //Lägg till images i newProduct, if satsen, och Product.create
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
    res.status(200).json({ message: 'Get all products '})
}

exports.getProductById = async (req, res) => {

}

exports.updateProduct = async (req, res) => {
    res.status(200).json({ message: 'Update product'})

}

exports.deleteProduct = async (req, res) => {
    res.status(200).json({ message: 'Delete product'})
}
