const mongoose = require('mongoose')

const  homestitingschema = new mongoose.Schema({
    Title:{type:String, required:true},
   Logo:{type:String,required:true},
   Name:{type:String, required:true},
   address:{type:String, required:true}, 
   email:{type:String, required:true},
   phone:{type:Number, required:true}, 
   whatapp:{type:Number, required:true},
   Facebook:{type:String, required:true}, 
  Instagram:{type:String, required:true},
   tiktok:{type:String, required:true},
  Herotitle:{type:String, required:true},
 HeroDiscritpion:{type:String, required:true},
 HerImage:{type:String, required:true},
  Footertext:{type:String, required:true}
})
const homestitingmodel = mongoose.model("home",homestitingschema)

module.exports=homestitingmodel;