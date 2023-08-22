const express = require ('express')
const skirts = express()
const { default: axios } = require('axios')
const Joi = require('joi')
const skirtsModel = require('../../../models/cotegories/top/skirtsSchema')


try {
    skirts.get('/',async(req,res)=>{
        const skirtsget = await skirtsModel.find()
        res.status(200).send(skirtsget)

    })
} catch (error) {
res.status(400).send(error.message)
}
try {
    skirts.get('/:id',async(req,res)=>{
        const getid= req.params.id
        const skirtsbyidget = await skirtsModel.findById(getid)
        res.status(200).send(skirtsbyidget)
    })
} catch (error) {
res.status(400).send(error.message)
}

const skirtsvalidate = (skirtsData) =>{
    const skirts = Joi.object({
        Type:Joi.string().required(),
        Size:Joi.string().required(),
        Color:Joi.string().required(),
        Quantity:Joi.number().required(),
        Price:Joi.string().required(),
        Image:Joi.string().required(),
        description:Joi.string().required()
    })
    return skirts.validate(skirtsData)
}
try {
    
    skirts.post('', async(req,res)=>{
        const{error} = skirtsvalidate(req.body)
        if(error){
            return res.json(error.message)
        
    }
        const Postskirts = await skirtsModel(req.body)
        await Postskirts.save()
        res.status(200).send({message:"inserted"})
    })
} catch (error) {
    res.status(400).send(error.message)
}

try {
    skirts.put('/:id', async(req,res)=>{
        const puid = req.params.id
        const updateskirts = await skirtsModel.findByIdAndUpdate(puid,req.body, {new:true})
        res.status(200).send({message:"updated"})
    })
} catch (error) {
    res.status(400).send(error.message)
}

try {
    skirts.delete('/:id',async(req,res)=>{
        const delid = req.params.id
    const deleteskirts = await skirtsModel.findByIdAndDelete(delid)
    res.status(200).send({message:"deleted"})
})
} catch (error) {
    res.status(400).send(error.message)    
}
module.exports=skirts