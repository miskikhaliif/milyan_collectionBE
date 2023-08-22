const mongoose = require('mongoose')

const outerwearShema = new mongoose.Schema({
    Type:{type:String,required:true},
    Size:{type:String,required:true},
    Color:{type:String,required:true},
    Quantity:{type:Number,required:true},
    Price:{type:String,required:true},
    Image:{type:String, required:true},
    Description:{type:String,required:true}
})

const outerwearModel= mongoose.model('outer',outerwearShema)

module.exports=outerwearModel