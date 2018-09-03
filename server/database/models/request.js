const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.Promise = Promise

const requestSchema = new Schema({
    name: { type: String, unique: false, required: true },
    model: { type: String, unique: false, required: true },
    option: { type: String, unique: false, required: true },
    price: { type: String, unique: false, required: true }
})

const Request = mongoose.model('Request', requestSchema)
module.exports = Request