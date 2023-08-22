const express = require ('express')
const outerwear = express()
const { default: axios } = require('axios')
const Joi = require('joi')
const outerwearModel = require('../../models/cotegories/outerwearSchema')
try {
    outerwear.get('/',async(req,res)=>{
        const outerwearget = await outerwearModel.find()
        res.status(200).send(outerwearget)
    })
} catch (error) {
res.status(400).send(error.message)
}
try {
    outerwear.get('/:id',async(req,res)=>{
        const getid= req.params.id
        const outerwearbyidget = await outerwearModel.findById(getid)
        res.status(200).send(outerwearbyidget)
    })
} catch (error) {
res.status(400).send(error.message)
}

const outerwearvalidate = (outerwearData) =>{
    const outerwear = Joi.object({
        Type:Joi.string().required(),
        Size:Joi.string().required(),
        Color:Joi.string().required(),
        Quantity:Joi.number().required(),
        Price:Joi.string().required(),
        Image:Joi.string().required(),
        description:Joi.string().required()
    })
    return outerwear.validate(outerwearData)
}
try {
    
    outerwear.post('', async(req,res)=>{
        const{error} = outerwearvalidate(req.body)
        if(error){
            return res.json(error.message)
        
    }
        const Postouterwear = await outerwearModel(req.body)
        await Postouterwear.save()
        res.status(200).send({message:"inserted"})
    })
} catch (error) {
    res.status(400).send(error.message)
}

try {
    outerwear.put('/:id', async(req,res)=>{
        const puid = req.params.id
        const updateouterwear = await outerwearModel.findByIdAndUpdate(puid,req.body, {new:true})
        res.status(200).send({message:"updated"})
    })
} catch (error) {
    res.status(400).send(error.message)
}

try {
    outerwear.delete('/:id',async(req,res)=>{
        const delid = req.params.id
    const deleteouterwear = await outerwearModel.findByIdAndDelete(delid)
    res.status(200).send({message:"deleted"})
})
} catch (error) {
    res.status(400).send(error.message)    
}
module.exports=outerwear