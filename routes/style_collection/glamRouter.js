const express =require ('express')
const glm = express.Router()

const glam =require('../../controllers/style_collections/glamController')
glm.get("/",glam)

glm.get("/:id",glam)

glm.post("/",glam)

glm.put("/:id",glam)

glm.delete("/:id",glam)

module.exports=glm