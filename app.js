const express = require('express')
const app = express()
const cors = require('cors')

const productController = require('./controllers/productController')
const messageController = require('./controllers/messageController')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/products', productController)
app.use('/api/message', messageController)

module.exports = app