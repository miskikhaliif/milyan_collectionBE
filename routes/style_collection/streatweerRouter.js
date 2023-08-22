const express =require ('express')
const sweaterweet = express.Router()

const sweater =require('../../controllers/style_collections/streerwearController')
sweaterweet.get("/",sweater)

sweaterweet.get("/:id",sweater)

sweaterweet.post("/",sweater)

sweaterweet.put("/:id",sweater)

sweaterweet.delete("/:id",sweater)

module.exports=sweaterweet