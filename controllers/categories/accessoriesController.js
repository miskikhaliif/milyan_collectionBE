const express = require ('express')
const accessories = express()
const { default: axios } = require('axios')
const Joi = require('joi')
const accesModel =require('../../models/cotegories/accessoriesSchema')


try {
    accessories.get('/',async(req,res)=>{
        const accessoriesget = await accesModel.find()
        res.status(200).send(accessoriesget)

    })
} catch (error) {
res.status(400).send(error.message)
}
try {
    accessories.get('/:id',async(req,res)=>{
        const getid= req.params.id
        const accessoriesbyidget = await accesModel.findById(getid)
        res.status(200).send(accessoriesbyidget)
    })
} catch (error) {
res.status(400).send(error.message)
}

const accessoriesvalidate = (accessoriesData) =>{
    const accessories = Joi.object({
        Type:Joi.string().required(),
        Size:Joi.string().required(),
        Color:Joi.string().required(),
        Quantity:Joi.number().required(),
        Price:Joi.string().required(),
        Image:Joi.string().required(),
        description:Joi.string().required()
    })
    return accessories.validate(accessoriesData)
}
try {
    
    accessories.post('', async(req,res)=>{
        const{error} = accessoriesvalidate(req.body)
        if(error){
            return res.json(error.message)
        
    }
        const Postaccessories = await accesModel(req.body)
        await Postaccessories.save()
        res.status(200).send({message:"inserted"})
    })
} catch (error) {
    res.status(400).send(error.message)
}

try {
    accessories.put('/:id', async(req,res)=>{
        const puid = req.params.id
        const updateaccessories = await accesModel.findByIdAndUpdate(puid,req.body, {new:true})
        res.status(200).send({message:"updated"})
    })
} catch (error) {
    res.status(400).send(error.message)
}

try {
    accessories.delete('/:id',async(req,res)=>{
        const delid = req.params.id
    const deleteaccessories = await accesModel.findByIdAndDelete(delid)
    res.status(200).send({message:"deleted"})
})
} catch (error) {
    res.status(400).send(error.message)    
}
module.exports=accessories