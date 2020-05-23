const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User',{
    name: {
        type: String,
        required: true,
        trim: true // makes sure that spaces are not present before or after the name
    },
    age:{
        type: Number,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true, 
        validate(value) {
            if (!validator.isEmail(value)) { // using imported validator email check (note that it is flipped - if the value is NOT an email)
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 6,
        validate(value) {       // creating new validation check
            if (value.toLowerCase().includes('password')) { // using custom validation check to seee if password is 'password'
                throw new Error('You cant use password as password')
            }
        }
    }
})

module.exports = User // Exports file for use by other files