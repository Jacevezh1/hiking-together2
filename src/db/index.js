const mongoose = require("mongoose")

async function connectDB() {
    
    await mongoose.connect(process.env.MONGODB, {
        useNewUrlParser:true,
        useUnifiedTopology: true
    })

    console.log("Base de datos conectada")
}



module.exports = connectDB

