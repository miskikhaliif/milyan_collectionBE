const express =require ('express')
const hand = express.Router()

const handbag =require('../../controllers/categories/handbagContreller')
hand.get("/",handbag)

hand.get("/:id",handbag)

hand.post("/",handbag)

hand.put("/:id",handbag)

hand.delete("/:id",handbag)

module.exports=hand