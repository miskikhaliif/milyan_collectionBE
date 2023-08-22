const express =require ('express')
const sweaters = express.Router()

const sweater =require('../../../controllers/categories/bottm/sewarterController')
sweaters.get("/",sweater)

sweaters.get("/:id",sweater)

sweaters.post("/",sweater)

sweaters.put("/:id",sweater)

sweaters.delete("/:id",sweater)

module.exports=sweaters