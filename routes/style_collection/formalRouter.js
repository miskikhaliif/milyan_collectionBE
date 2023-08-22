const express =require ('express')
const formals = express.Router()

const formal =require('../../controllers/style_collections/formalController')
formals.get("/",formal)

formals.get("/:id",formal)

formals.post("/",formal)

formals.put("/:id",formal)

formals.delete("/:id",formal)

module.exports=formals