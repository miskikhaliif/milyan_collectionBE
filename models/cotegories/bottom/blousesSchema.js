const mongoose = require('mongoose')

const blousesSchema = new mongoose.Schema({
    Type:{type:String,required:true},
    Size:{type:String,required:true},
    Color:{type:String,required:true},
    Quantity:{type:Number,required:true},
    Price:{type:String,required:true},
    Image:{type:String, required:true},
    Description:{type:String,required:true}
})

const blousesModel= mongoose.model('blouses',blousesSchema)

module.exports=blousesModel