const express =require ('express')
const skirt = express.Router()

const skirts =require('../../../controllers/categories/bottm/blouseController')
skirt.get("/",skirts)

skirt.get("/:id",skirts)

skirt.post("/",skirts)

skirt.put("/:id",skirts)

skirt.delete("/:id",skirts)

module.exports=skirt