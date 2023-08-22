const mongoose = require('mongoose')

const bahoSchema = new mongoose.Schema({
    Size:{type:String,required:true},
    Color:{type:String,required:true},
    Quantity:{type:Number,required:true},
    Price:{type:String,required:true},
    Image:{type:String, required:true},
    Description:{type:String,required:true}
})

const bahoMdel = mongoose.model('baho',bahoSchema)

module.exports=bahoMdel