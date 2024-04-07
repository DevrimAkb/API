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
router.post('/', createProduct)
// Read
router.get('/', getAllProducts)
router.get('/:id', getProductById)
// Update
router.put('/:id', updateProduct)
// Delete
router.delete('/:id', deleteProduct)


module.exports = router