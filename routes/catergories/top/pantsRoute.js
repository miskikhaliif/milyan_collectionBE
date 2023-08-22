const express =require ('express')
const pant = express.Router()

const pants =require('../../../controllers/categories/top/pantsController')
pant.get("/",pants)

pant.get("/:id",pants)

pant.post("/",pants)

pant.put("/:id",pants)

pant.delete("/:id",pants)

module.exports=pant