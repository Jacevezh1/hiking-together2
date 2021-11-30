// Import - Modelo de hikes card

const { Schema, model } = require('mongoose')





// Schema
const hikesSchema = new Schema({
    
    creator: String,
    description: {
        type: String
    },
    imageUrl: {
        type: String
    },
    time: String,
    location: String
}, {timestamps: true})


// Model
const Hike = model('Hike', hikesSchema)


// Export
module.exports = hikesSchema






