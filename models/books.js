const mongoose = require('mongoose')


let bookSchema = new mongoose.Schema({
    title: { type: String, default: 'Anonymous' },
    description: { type: String, default: false },
    year: { type: Number, required: true },
    quantity: { type: Number, default: '' },
    imageURL: {type: String, default: ''}
})
  
module.exports = mongoose.model('Book', bookSchema)
