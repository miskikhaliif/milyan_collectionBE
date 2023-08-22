const express =require ('express')
const boh = express.Router()

const boho =require('../../controllers/style_collections/bohoController')
boh.get("/",boho)

boh.get("/:id",boho)

boh.post("/",boho)

boh.put("/:id",boho)

boh.delete("/:id",boho)

module.exports=boh