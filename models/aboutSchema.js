const mongoose = require ('mongoose')

const aboutschema = new mongoose.Schema({
    fahfaahin_yar:{type:String, required:true},
    fahfaahin:{type:String, required:true}
})
const aboutmodel = mongoose.model("abouts",aboutschema)
module.exports=aboutmodel;