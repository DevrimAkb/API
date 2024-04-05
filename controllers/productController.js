const router = require('express').Router() 
const {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
} = require('../models/productModel')

// CRUD - Create, Read, Update, Delete

// Create
// router.post('/', createProduct)
// Read
// router.get()
// Update
// router.put()
// Delete
// router.delete()


module.exports = router