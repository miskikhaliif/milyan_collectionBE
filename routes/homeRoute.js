const express =require ('express')
const homestitings = express.Router();
const homestiting =require('../controllers/homeController')

homestitings.get('/',homestiting)
homestitings.get('/:id',homestiting)
homestitings.post('/',homestiting)
homestitings.put('/:id',homestiting)
homestitings.delete('/:id',homestiting)

module.exports=homestitings;
