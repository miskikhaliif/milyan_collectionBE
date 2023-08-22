const mongoose = require('mongoose')

const bohemianSchema = new mongoose.Schema({
    Size:{type:String,required:true},
    Color:{type:String,required:true},
    Quantity:{type:Number,required:true},
    Price:{type:String,required:true}, 
    Image:{type:String, required:true},
    Description:{type:String,required:true}
})

const bohemianModel= mongoose.model('bohemian',bohemianSchema)

module.exports=bohemianModel