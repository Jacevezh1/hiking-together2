// Import - Modelo de rooms
const { Schema, model } = require('mongoose')

// Schema
const hikeSchema = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    imageUrl: {
        type: String
    },
    location: String,
    time: String, 
    contact: String
}, {timestamps: true})



// Model
const Hike = model('Hike', hikeSchema)


// Export
module.exports = Hike
