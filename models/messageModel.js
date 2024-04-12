const Message = require('../schemas/messageSchema')

exports.createMessage = async (req, res) => {
    try {
        const newMessage = {
            name: name,
            email: email,
            message: message
        } = req.body
        if(!name || !email || !message) {
            res.status(400).json('You must enter all fields correctly')
        }
        Message.create({name, email, message})
        .then(message => {
            res.status(200).json(message)
        })
    } catch (err) {
        console.log(err.message)
        res.status(400).json('Something went wrong')
    }
}

exports.getAllMessages = async (req, res) => {
    try {
        Message.find()
        .then(message => {
            res.status(200).json(message)
        })
    } catch (err) {
        res.json({message: err.message})
    }
}
