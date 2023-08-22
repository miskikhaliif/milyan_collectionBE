const mongoose = require ('mongoose')

const imageGalleryschema = new mongoose.Schema({
    img_title:{type:String, required:true},
    image:{type:String, required:true}
})
const imageGallerymodel =mongoose.model("imageGallery",imageGalleryschema)

module.exports=imageGallerymodel;