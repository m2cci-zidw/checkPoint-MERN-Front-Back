// require mongosse
const mongoose = require('mongoose')
const schema =mongoose.Schema
const contactschema = new schema({
    name:{
       type:String,
       required:true 
    },
    email:{
        type:String,
        required:true,
        unique: true
     },
     phone:{
        type:Number,
        
     }
})
module.exports= Contact=mongoose.model("contact",contactschema)