const express = require ('express')
const shirts = express()
const shirtsModel = require('../../../models/cotegories/bottom/shirtsSchema')
const { default: axios } = require('axios')
const Joi = require('joi')


try {
    shirts.get('/',async(req,res)=>{
        const Shirtsget = await shirtsModel.find()
        res.status(200).send(Shirtsget)
    })
} catch (error) {
res.status(400).send(error.message)
}
try {
    shirts.get('/:id',async(req,res)=>{
        const getid= req.params.id
        const Shirtsbyidget = await shirtsModel.findById(getid)
        res.status(200).send(Shirtsbyidget)
    })
} catch (error) {
res.status(400).send(error.message)
}

const shitsvalidate = (shirtsData) =>{
    const shirt = Joi.object({
        Type:Joi.string().required(),
        Size:Joi.string().required(),
        Color:Joi.string().required(),
        Quantity:Joi.number().required(),
        Price:Joi.string().required(),
        Image:Joi.string().required(),
        description:Joi.string().required()
    })
    return shirt.validate(shirtsData)
}
try {
    
    shirts.post('', async(req,res)=>{
        const{error} = shitsvalidate(req.body)
        if(error){
            return res.json(error.message)
        
    }
        const PostShirts = await shirtsModel(req.body)
        await PostShirts.save()
        res.status(200).send({message:"inserted"})
    })
} catch (error) {
    res.status(400).send(error.message)
}

try {
    shirts.put('/:id', async(req,res)=>{
        const shid = req.params.id
        const updateshirts = await shirtsModel.findByIdAndUpdate(shid,req.body, {new:true})
        res.status(200).send({message:"updated"})
    })
} catch (error) {
    res.status(400).send(error.message)
}

try {
    shirts.delete('/:id',async(req,res)=>{
        const delid = req.params.id
    const deleteShirt = await shirtsModel.findByIdAndDelete(delid)
    res.status(200).send({message:"deleted"})
})
} catch (error) {
    res.status(400).send(error.message)    
}
module.exports=shirts