const express = require ('express')
const dress = express()
const { default: axios } = require('axios')
const Joi = require('joi')
const dressmodel = require('../../models/cotegories/dresesSchema')


try {
    dress.get('/',async(req,res)=>{
        const dressget = await dressmodel.find()
        res.status(200).send(dressget)

    })
} catch (error) {
res.status(400).send(error.message)
}
try {
    dress.get('/:id',async(req,res)=>{
        const getid= req.params.id
        const dressbyidget = await dressmodel.findById(getid)
        res.status(200).send(dressbyidget)
    })
} catch (error) {
res.status(400).send(error.message)
}

const dressvalidate = (dressData) =>{
    const dress = Joi.object({
        Type:Joi.string().required(),
        Size:Joi.string().required(),
        Color:Joi.string().required(),
        Quantity:Joi.number().required(),
        Price:Joi.string().required(),
        Image:Joi.string().required(),
        description:Joi.string().required()
    })
    return dress.validate(dressData)
}
try {
    
    dress.post('', async(req,res)=>{
        const{error} = dressvalidate(req.body)
        if(error){
            return res.json(error.message)
        
    }
        const Postdress = await dressmodel(req.body)
        await Postdress.save()
        res.status(200).send({message:"inserted"})
    })
} catch (error) {
    res.status(400).send(error.message)
}

try {
    dress.put('/:id', async(req,res)=>{
        const puid = req.params.id
        const updatedress = await dressmodel.findByIdAndUpdate(puid,req.body, {new:true})
        res.status(200).send({message:"updated"})
    })
} catch (error) {
    res.status(400).send(error.message)
}

try {
    dress.delete('/:id',async(req,res)=>{
        const delid = req.params.id
    const deletedress = await dressmodel.findByIdAndDelete(delid)
    res.status(200).send({message:"deleted"})
})
} catch (error) {
    res.status(400).send(error.message)    
}
module.exports=dress