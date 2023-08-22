const express = require ('express')
const jeans = express()
const { default: axios } = require('axios')
const Joi = require('joi')
const jeansModel = require('../../../models/cotegories/top/jeansSchema')


try {
    jeans.get('/',async(req,res)=>{
        const jeansget = await jeansModel.find()
        res.status(200).send(jeansget)

    })
} catch (error) {
res.status(400).send(error.message)
}
try {
    jeans.get('/:id',async(req,res)=>{
        const getid= req.params.id
        const jeansbyidget = await jeansModel.findById(getid)
        res.status(200).send(jeansbyidget)
    })
} catch (error) {
res.status(400).send(error.message)
}

const jeansvalidate = (jeansData) =>{
    const jean = Joi.object({
        Type:Joi.string().required(),
        Size:Joi.string().required(),
        Color:Joi.string().required(),
        Quantity:Joi.number().required(),
        Price:Joi.string().required(),
        Image:Joi.string().required(),
        description:Joi.string().required()
    })
    return jean.validate(jeansData)
}
try {
    
    jeans.post('', async(req,res)=>{
        const{error} = jeansvalidate(req.body)
        if(error){
            return res.json(error.message)
        
    }
        const Postjeans = await jeansModel(req.body)
        await Postjeans.save()
        res.status(200).send({message:"inserted"})
    })
} catch (error) {
    res.status(400).send(error.message)
}

try {
    jeans.put('/:id', async(req,res)=>{
        const puid = req.params.id
        const updatejeans = await jeansModel.findByIdAndUpdate(puid,req.body, {new:true})
        res.status(200).send({message:"updated"})
    })
} catch (error) {
    res.status(400).send(error.message)
}

try {
    jeans.delete('/:id',async(req,res)=>{
        const delid = req.params.id
    const deletejeans = await jeansModel.findByIdAndDelete(delid)
    res.status(200).send({message:"deleted"})
})
} catch (error) {
    res.status(400).send(error.message)    
}
module.exports=jeans