const express =require ('express')
const access = express.Router()

const accessories =require('../../controllers/categories/accessoriesController')
access.get("/",accessories)

access.get("/:id",accessories)

access.post("/",accessories)

access.put("/:id",accessories)

access.delete("/:id",accessories)

module.exports=access