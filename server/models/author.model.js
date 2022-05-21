const mongoose = require('mongoose');

const AuthorsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name has to be at least 3 characters long"]
    }

}, {timestamps: true})

// creating Product schema and calling it Product
module.exports.Author = mongoose.model('Author', AuthorsSchema)