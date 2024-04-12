const router = require('express').Router()

const { createMessage, getAllMessages } = require('../models/messageModel')

router.post('/', createMessage)
router.get('/', getAllMessages)
module.exports = router