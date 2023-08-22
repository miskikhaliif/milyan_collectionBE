const mongoose = require('mongoose')

const sweatSchema = new mongoose.Schema({
    Type:{type:String,required:true},
    Size:{type:String,required:true},
    Color:{type:String,required:true},
    Quantity:{type:Number,required:true},
    Price:{type:String,required:true},
    Image:{type:String, required:true},
    Description:{type:String,required:true}
})

const sweatModel = mongoose.model('sweaters',sweatSchema)

module.exports=sweatModel