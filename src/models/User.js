// 1. Import - (Destructuracion de objetos)

const { Schema, model } = require('mongoose')


// 2. Schema

const userSchema = new Schema({

    name: {
        type: String,
        trim: true, 
        required: [true, 'User name is required.']
    }, 
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, 'Use a valid email.']
    }, 
    password: {
        type: String,
        required: [true, 'Password is required.']
    },
   
}, {timestamps: true})


// 3. Model

const User = model('User', userSchema)



// 4. Export

module.exports = User


