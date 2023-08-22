const express =require ('express')
const jawelr = express.Router()

const jawelry =require('../../controllers/categories/jawelryController')
jawelr.get("/",jawelry)

jawelr.get("/:id",jawelry)

jawelr.post("/",jawelry)

jawelr.put("/:id",jawelry)

jawelr.delete("/:id",jawelry)

module.exports=jawelr