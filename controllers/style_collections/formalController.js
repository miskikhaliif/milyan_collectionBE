const express = require ('express')
const formal = express()
const { default: axios } = require('axios')
const Joi = require('joi')
const formalModal = require('../../models/style_collection/formalSchema')


try {
    formal.get('/',async(req,res)=>{
        const formalget = await formalModal.find()
        res.status(200).send(formalget)
    })
} catch (error) {
res.status(400).send(error.message)
}
try {
    formal.get('/:id',async(req,res)=>{
        const getid= req.params.id
        const formalbyidget = await formalModal.findById(getid)
        res.status(200).send(formalbyidget)
    })
} catch (error) {
res.status(400).send(error.message)
}

const formalvalidate = (formalData) =>{
    const formal = Joi.object({
        Size:Joi.string().required(),
        Color:Joi.string().required(),
        Quantity:Joi.number().required(),
        Price:Joi.string().required(),
        Image:Joi.string().required(),
        description:Joi.string().required()
    })
    return formal.validate(formalData)
}
try {
    
    formal.post('', async(req,res)=>{
        const{error} = formalvalidate(req.body)
        if(error){
            return res.json(error.message)
        
    }
        const Postformal = await formalModal(req.body)
        await Postformal.save()
        res.status(200).send({message:"inserted"})
    })
} catch (error) {
    res.status(400).send(error.message)
}

try {
    formal.put('/:id', async(req,res)=>{
        const puid = req.params.id
        const updateformal = await formalModal.findByIdAndUpdate(puid,req.body, {new:true})
        res.status(200).send({message:"updated"})
    })
} catch (error) {
    res.status(400).send(error.message)
}

try {
    formal.delete('/:id',async(req,res)=>{
        const delid = req.params.id
    const deleteformal = await formalModal.findByIdAndDelete(delid)
    res.status(200).send({message:"deleted"})
})
} catch (error) {
    res.status(400).send(error.message)    
}
module.exports=formal