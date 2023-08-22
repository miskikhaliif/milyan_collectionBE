const express = require ('express')
const sweater = express()
const { default: axios } = require('axios')
const Joi = require('joi')
const sweatModel = require('../../../models/cotegories/bottom/swearterSchema')


try {
    sweater.get('/',async(req,res)=>{
        const sweaterget = await sweatModel.find()
        res.status(200).send(sweaterget)

    })
} catch (error) {
res.status(400).send(error.message)
}
try {
    sweater.get('/:id',async(req,res)=>{
        const getid= req.params.id
        const sweaterbyidget = await sweatModel.findById(getid)
        res.status(200).send(sweaterbyidget)
    })
} catch (error) {
res.status(400).send(error.message)
}

const sweatervalidate = (sweaterData) =>{
    const sweater = Joi.object({
        Type:Joi.string().required(),
        Size:Joi.string().required(),
        Color:Joi.string().required(),
        Quantity:Joi.number().required(),
        Price:Joi.string().required(),
        Image:Joi.string().required(),
        description:Joi.string().required()
    })
    return sweater.validate(sweaterData)
}
try {
    
    sweater.post('', async(req,res)=>{
        const{error} = sweatervalidate(req.body)
        if(error){
            return res.json(error.message)
        
    }
        const Postsweater = await sweatModel(req.body)
        await Postsweater.save()
        res.status(200).send({message:"inserted"})
    })
} catch (error) {
    res.status(400).send(error.message)
}

try {
    sweater.put('/:id', async(req,res)=>{
        const puid = req.params.id
        const updatesweater = await sweatModel.findByIdAndUpdate(puid,req.body, {new:true})
        res.status(200).send({message:"updated"})
    })
} catch (error) {
    res.status(400).send(error.message)
}

try {
    sweater.delete('/:id',async(req,res)=>{
        const delid = req.params.id
    const deletesweater = await sweatModel.findByIdAndDelete(delid)
    res.status(200).send({message:"deleted"})
})
} catch (error) {
    res.status(400).send(error.message)    
}
module.exports=sweater