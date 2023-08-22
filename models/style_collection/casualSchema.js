const mongoose = require('mongoose')

const casualSchema = new mongoose.Schema({
    Size:{type:String,required:true},
    Color:{type:String,required:true},
    Quantity:{type:Number,required:true},
    Price:{type:String,required:true},
    Image:{type:String, required:true},
    Description:{type:String,required:true}
})

const casualModel = mongoose.model('casual',casualSchema)

module.exports=casualModel