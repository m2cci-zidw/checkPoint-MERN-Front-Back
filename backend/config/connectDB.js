// require mongoose
const mongoose = require('mongoose')

// connection to DB
const connectDB = async()=>{
    try { 
        // await mongoose.connect(process.env.MONGO_URI)
        await mongoose.connect( 'mongodb://localhost:27017/mern-f1',{
            useNewUrlParser: true,
            useUnifiedTopology: true

        })
        console.log('Database is connected...')
    } catch (error) {
        console.error(`connection data base failed!!! ${error}`)
        
    }
}

module.exports = connectDB
