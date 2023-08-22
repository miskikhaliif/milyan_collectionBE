const express =require ('express')
const oute = express.Router()

const outerwear =require('../../controllers/categories/outerwaerContriller')
oute.get("/",outerwear)

oute.get("/:id",outerwear)

oute.post("/",outerwear)

oute.put("/:id",outerwear)

oute.delete("/:id",outerwear)

module.exports=oute