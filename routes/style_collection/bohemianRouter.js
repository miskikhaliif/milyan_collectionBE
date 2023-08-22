const express =require ('express')
const bohemianS = express.Router()

const bohemian =require('../../controllers/style_collections/bohemianController')
bohemianS.get("/",bohemian)

bohemianS.get("/:id",bohemian)

bohemianS.post("/",bohemian)

bohemianS.put("/:id",bohemian)

bohemianS.delete("/:id",bohemian)

module.exports=bohemianS