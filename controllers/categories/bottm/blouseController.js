const express = require ('express')
const blouses = express()
const { default: axios } = require('axios')
const Joi = require('joi')
const blousesModel = require('../../../models/cotegories/bottom/blousesSchema')


try {
    blouses.get('/',async(req,res)=>{
        const blousesget = await blousesModel.find()
        res.status(200).send(blousesget)
    })
} catch (error) {
res.status(400).send(error.message)
}
try {
    blouses.get('/:id',async(req,res)=>{
        const getid= req.params.id
        const blousesbyidget = await blousesModel.findById(getid)
        res.status(200).send(blousesbyidget)
    })
} catch (error) {
res.status(400).send(error.message)
}

const blousesvalidate = (blousessData) =>{
    const blouse = Joi.object({
        Type:Joi.string().required(),
        Size:Joi.string().required(),
        Color:Joi.string().required(),
        Quantity:Joi.number().required(),
        Price:Joi.string().required(),
        Image:Joi.string().required(),
        description:Joi.string().required()
    })
    return blouse.validate(blousessData)
}
try {
    
    blouses.post('', async(req,res)=>{
        const{error} = blousesvalidate(req.body)
        if(error){
            return res.json(error.message)
        
    }
        const Postblouses = await blousesModel(req.body)
        await Postblouses.save()
        res.status(200).send({message:"inserted"})
    })
} catch (error) {
    res.status(400).send(error.message)
}

try {
    blouses.put('/:id', async(req,res)=>{
        const puid = req.params.id
        const updateblouses = await blousesModel.findByIdAndUpdate(puid,req.body, {new:true})
        res.status(200).send({message:"updated"})
    })
} catch (error) {
    res.status(400).send(error.message)
}

try {
    blouses.delete('/:id',async(req,res)=>{
        const delid = req.params.id
    const deleteblouses = await blousesModel.findByIdAndDelete(delid)
    res.status(200).send({message:"deleted"})
})
} catch (error) {
    res.status(400).send(error.message)    
}
module.exports=blouses