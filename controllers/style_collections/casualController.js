const express = require ('express')
const casual = express()
const { default: axios } = require('axios')
const Joi = require('joi')
const casualModel = require('../../models/style_collection/casualSchema')
try {
    casual.get('/',async(req,res)=>{
        const casualget = await casualModel.find()
        res.status(200).send(casualget)
    })
} catch (error) {
res.status(400).send(error.message)
}
try {
    casual.get('/:id',async(req,res)=>{
        const getid= req.params.id
        const casualbyidget = await casualModel.findById(getid)
        res.status(200).send(casualbyidget)
    })
} catch (error) {
res.status(400).send(error.message)
}

const casualvalidate = (casualData) =>{
    const casual = Joi.object({
        Size:Joi.string().required(),
        Color:Joi.string().required(),
        Quantity:Joi.number().required(),
        Price:Joi.string().required(),
        Image:Joi.string().required(),
        description:Joi.string().required()
    })
    return casual.validate(casualData)
}
try {
    
    casual.post('', async(req,res)=>{
        const{error} = casualvalidate(req.body)
        if(error){
            return res.json(error.message)
        
    }
        const Postcasual = await casualModel(req.body)
        await Postcasual.save()
        res.status(200).send({message:"inserted"})
    })
} catch (error) {
    res.status(400).send(error.message)
}

try {
    casual.put('/:id', async(req,res)=>{
        const puid = req.params.id
        const updatecasual = await casualModel.findByIdAndUpdate(puid,req.body, {new:true})
        res.status(200).send({message:"updated"})
    })
} catch (error) {
    res.status(400).send(error.message)
}

try {
    bohemian.delete('/:id',async(req,res)=>{
        const delid = req.params.id
    const deletecasual= await casualModel.findByIdAndDelete(delid)
    res.status(200).send({message:"deleted"})
})
} catch (error) {
    // res.status(400).send(error.message)    
}
module.exports=casual