const express =require ('express')
const shirt = express.Router()

const shirts  =require('../../../controllers/categories/bottm/shirtsConroller')

shirt.get("/",shirts)

shirt.get("/:id",shirts)

shirt.post("/",shirts)

shirt.put("/:id",shirts)

shirt.delete("/:id",shirts)

module.exports=shirt