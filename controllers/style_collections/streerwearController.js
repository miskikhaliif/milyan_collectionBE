const express = require ('express')
const streat = express()
const { default: axios } = require('axios')
const Joi = require('joi')
const streatweeModel = require('../../models/style_collection/streetwearSchema')


try {
    streat.get('/',async(req,res)=>{
        const streatget = await streatweeModel.find()
        res.status(200).send(streatget)
    })
} catch (error) {
res.status(400).send(error.message)
}
try {
    streat.get('/:id',async(req,res)=>{
        const getid= req.params.id
        const streatbyidget = await streatweeModel.findById(getid)
        res.status(200).send(streatbyidget)
    })
} catch (error) {
res.status(400).send(error.message)
}

const streatvalidate = (streatData) =>{
    const streat = Joi.object({
        Size:Joi.string().required(),
        Color:Joi.string().required(),
        Quantity:Joi.number().required(),
        Price:Joi.string().required(),
        Image:Joi.string().required(),
        description:Joi.string().required()
    })
    return streat.validate(streatData)
}
try {
    
    streat.post('', async(req,res)=>{
        const{error} = streatvalidate(req.body)
        if(error){
            return res.json(error.message)
        
    }
        const Poststreat = await streatweeModel(req.body)
        await Poststreat.save()
        res.status(200).send({message:"inserted"})
    })
} catch (error) {
    res.status(400).send(error.message)
}

try {
    streat.put('/:id', async(req,res)=>{
        const puid = req.params.id
        const updatestreat = await streatweeModel.findByIdAndUpdate(puid,req.body, {new:true})
        res.status(200).send({message:"updated"})
    })
} catch (error) {
    res.status(400).send(error.message)
}

try {
    streat.delete('/:id',async(req,res)=>{
        const delid = req.params.id
    const deletestreat = await streatweeModel.findByIdAndDelete(delid)
    res.status(200).send({message:"deleted"})
})
} catch (error) {
    res.status(400).send(error.message)    
}
module.exports=streat

