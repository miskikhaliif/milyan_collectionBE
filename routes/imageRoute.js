const express = require('express')
const imag = express.Router()

const gallery = require('../controllers/imageController')

imag.get('/',gallery)
imag.get('/:id',gallery)
imag.post('/',gallery)
imag.put('/:id',gallery)
imag.delete('/:id',gallery)

module.exports=imag
