const express =require ('express')
const abouts = express.Router();
const about =require('../controllers/aboutController')

abouts.get('/',about)
abouts.get('/:id',about)
abouts.post('/',about)
abouts.put('/:id',about)
abouts.delete('/:id',about)

module.exports=abouts;
