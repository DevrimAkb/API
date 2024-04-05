const mongoose = require('mongoose')


const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'You need to enter a product name']
    },
    price: {
        type: Number,
        required: [true, 'You need to enter a price']
    },
    description: {
        type: String,
        required: [true, 'You need to enter a description']
    },
    category: {
        type: String,
        required: [true, 'You need to enter a category']
    },
    images: {
        type: [String],
        required: [true, 'You need atleast one image']
    }
}, { timestamps: true })

const Product = mongoose.model('Product', productSchema)

module.exports = Product

