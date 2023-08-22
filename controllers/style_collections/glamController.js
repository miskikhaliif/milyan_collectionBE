const express = require ('express')
const glam = express()
const { default: axios } = require('axios')
const Joi = require('joi')
const glamModel = require('../../models/style_collection/glamSchema')


try {
    glam.get('/',async(req,res)=>{
        const glamget = await glamModel.find()
        res.status(200).send(glamget)
    })
} catch (error) {
res.status(400).send(error.message)
}
try {
    formal.get('/:id',async(req,res)=>{
        const getid= req.params.id
        const glambyidget = await glamModel.findById(getid)
        res.status(200).send(glambyidget)
    })
} catch (error) {
// res.status(400).send(error.message)
}

const glamvalidate = (glamData) =>{
    const glam = Joi.object({
        Size:Joi.string().required(),
        Color:Joi.string().required(),
        Quantity:Joi.number().required(),
        Price:Joi.string().required(),
        Image:Joi.string().required(),
        description:Joi.string().required()
    })
    return formal.glam(glamData)
}
try {
    
    glam.post('', async(req,res)=>{
        const{error} = glamvalidate(req.body)
        if(error){
            return res.json(error.message)
        
    }
        const Postglam = await glamModel(req.body)
        await Postglam.save()
        res.status(200).send({message:"inserted"})
    })
} catch (error) {
    res.status(400).send(error.message)
}

try {
    glam.put('/:id', async(req,res)=>{
        const puid = req.params.id
        const updateglam = await glamModel.findByIdAndUpdate(puid,req.body, {new:true})
        res.status(200).send({message:"updated"})
    })
} catch (error) {
    res.status(400).send(error.message)
}

try {
    glam.delete('/:id',async(req,res)=>{
        const delid = req.params.id
    const deleteglam = await glamModel.findByIdAndDelete(delid)
    res.status(200).send({message:"deleted"})
})
} catch (error) {
    // res.status(400).send(error.message)    
}
module.exports=glam