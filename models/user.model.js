const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    email: String,
    password: Number,
    message: String
})

module.exports = mongoose.model('User'  , UserSchema)