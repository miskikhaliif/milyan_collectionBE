const express =require ('express')
const blouse = express.Router()

const blouses =require('../../../controllers/categories/bottm/blouseController')
blouse.get("/",blouses)

blouse.get("/:id",blouses)

blouse.post("/",blouses)

blouse.put("/:id",blouses)

blouse.delete("/:id",blouses)

module.exports=blouse