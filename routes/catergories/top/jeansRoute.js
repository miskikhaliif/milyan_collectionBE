const express =require ('express')
const jean = express.Router()

const jeans =require('../../../controllers/categories/top/jeansController')
jeans.get("/",jean)

jeans.get("/:id",jean)

jeans.post("/",jean)

jeans.put("/:id",jean)

jeans.delete("/:id",jean)

module.exports=jeans