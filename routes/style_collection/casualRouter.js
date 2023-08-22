const express =require ('express')
const casua = express.Router()

const casual =require('../../controllers/style_collections/casualController')
casua.get("/",casual)

casua.get("/:id",casual)

casua.post("/",casual)

casua.put("/:id",casual)

casua.delete("/:id",casual)

module.exports=casua