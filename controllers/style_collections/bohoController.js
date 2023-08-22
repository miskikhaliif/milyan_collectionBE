const express = require ('express')
const boho = express()
const { default: axios } = require('axios')
const Joi = require('joi')
const bahoMdel = require('../../models/style_collection/bohoSchema')


try {
    boho.get('/',async(req,res)=>{
        const bohoget = await bahoMdel.find()
        res.status(200).send(bohoget)
    })
} catch (error) {
res.status(400).send(error.message)
}
try {
    boho.get('/:id',async(req,res)=>{
        const getid= req.params.id
        const bohobyidget = await bahoMdel.findById(getid)
        res.status(200).send(bohobyidget)
    })
} catch (error) {
res.status(400).send(error.message)
}

const bohovalidate = (bohoData) =>{
    const boho = Joi.object({
        Size:Joi.string().required(),
        Color:Joi.string().required(),
        Quantity:Joi.number().required(),
        Price:Joi.string().required(),
        Image:Joi.string().required(),
        description:Joi.string().required()
    })
    return boho.validate(bohoData)
}
try {
    
    boho.post('', async(req,res)=>{
        const{error} = bohovalidate(req.body)
        if(error){
            return res.json(error.message)
        
    }
        const Postboho = await bahoMdel(req.body)
        await Postboho.save()
        res.status(200).send({message:"inserted"})
    })
} catch (error) {
    res.status(400).send(error.message)
}

try {
    boho.put('/:id', async(req,res)=>{
        const puid = req.params.id
        const updateboho = await bahoMdel.findByIdAndUpdate(puid,req.body, {new:true})
        res.status(200).send({message:"updated"})
    })
} catch (error) {
    res.status(400).send(error.message)
}

try {
    boho.delete('/:id',async(req,res)=>{
        const delid = req.params.id
    const deleteboho = await bahoMdel.findByIdAndDelete(delid)
    res.status(200).send({message:"deleted"})
})
} catch (error) {
    res.status(400).send(error.message)    
}
module.exports=boho