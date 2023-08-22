const express =require ('express')
const dresses = express.Router()

const dress =require('../../controllers/categories/dressController')
dresses.get("/",dress)

dresses.get("/:id",dress)

dresses.post("/",dress)

dresses.put("/:id",dress)

dresses.delete("/:id",dress)

module.exports=dresses