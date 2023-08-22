const express = require ('express')
const jawelry = express()
const { default: axios } = require('axios')
const Joi = require('joi')
const jawelryModel = require('../../models/cotegories/jewelrySchema')


try {
    jawelry.get('/',async(req,res)=>{
        const jawelryget = await jawelryModel.find()
        res.status(200).send(jawelryget)

    })
} catch (error) {
res.status(400).send(error.message)
}
try {
    jawelry.get('/:id',async(req,res)=>{
        const getid= req.params.id
        const jawelrybyidget = await jawelryModel.findById(getid)
        res.status(200).send(jawelrybyidget)
    })
} catch (error) {
res.status(400).send(error.message)
}

const jawelryvalidate = (jawelrysData) =>{
    const jawelry = Joi.object({
        Type:Joi.string().required(),
        Size:Joi.string().required(),
        Color:Joi.string().required(),
        Quantity:Joi.number().required(),
        Price:Joi.string().required(),
        Image:Joi.string().required(),
        description:Joi.string().required()
    })
    return jawelry.validate(jawelrysData)
}
try {
    
    jawelry.post('', async(req,res)=>{
        const{error} = jawelryvalidate(req.body)
        if(error){
            return res.json(error.message)
        
    }
        const Postjawelry= await jawelryModel(req.body)
        await Postjawelry.save()
        res.status(200).send({message:"inserted"})
    })
} catch (error) {
    res.status(400).send(error.message)
}

try {
    jawelry.put('/:id', async(req,res)=>{
        const puid = req.params.id
        const updatejawelry= await jawelryModel.findByIdAndUpdate(puid,req.body, {new:true})
        res.status(200).send({message:"updated"})
    })
} catch (error) {
    res.status(400).send(error.message)
}

try {
    jawelry.delete('/:id',async(req,res)=>{
        const delid = req.params.id
    const deletejawelry = await jawelryModel.findByIdAndDelete(delid)
    res.status(200).send({message:"deleted"})
})
} catch (error) {
    res.status(400).send(error.message)    
}
module.exports=jawelry