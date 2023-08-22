const mongodb = require ('mongoose')

const dressSchema = new mongodb.Schema ({
    Type:{type:String,required:true},
    Size:{type:String,required:true},
    Color:{type:String,required:true},
    Quantity:{type:String,required:true},
    Price:{type:String,required:true},
    Image:{type:String, required:true},
    Description:{type:String,required:true}
})

const dressmodel = mongodb.model('dress',dressSchema)

module.exports=dressmodel