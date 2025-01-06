
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/login",)

const User= mongoose.model('User',{
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});


module.exports = User;
