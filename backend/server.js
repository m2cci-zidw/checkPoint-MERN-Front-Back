//1- require express 
const express= require('express')

// -2 instance of express
const app= express();

// -4 require dot env and configure 
// require("dotenv").config();

//Midellware parser
app.use(express.json())

// -5 Connect to DB
const connectDB =require('./config/connectDB')
connectDB()

//6- Route
app.use('/api/contacts',require('./routes/contact'))

// -3 PORT
const PORT=process.env.PORT || 7000

// -4 creation server
app.listen(PORT,error=>
    error? console.log(error)
    :
    console.log(`server is running in ${PORT}`))