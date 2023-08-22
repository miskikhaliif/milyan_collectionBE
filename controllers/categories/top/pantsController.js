const express = require ('express')
const pants = express()
const { default: axios } = require('axios')
const Joi = require('joi')
const sweatModel = require('../../../models/cotegories/bottom/swearterSchema')
const pantModel = require('../../../models/cotegories/top/pantsSchema')


try {
    pants.get('/',async(req,res)=>{
        const pantsget = await pantModel.find()
        res.status(200).send(pantsget)

    })
} catch (error) {
res.status(400).send(error.message)
}
try {
    pants.get('/:id',async(req,res)=>{
        const getid= req.params.id
        const pantsbyidget = await pantModel.findById(getid)
        res.status(200).send(pantsbyidget)
    })
} catch (error) {
res.status(400).send(error.message)
}

const pantsvalidate = (pantsData) =>{
    const pants = Joi.object({
        Type:Joi.string().required(),
        Size:Joi.string().required(),
        Color:Joi.string().required(),
        Quantity:Joi.number().required(),
        Price:Joi.string().required(),
        Image:Joi.string().required(),
        description:Joi.string().required()
    })
    return pants.validate(pantsData)
}
try {
    
    pants.post('', async(req,res)=>{
        const{error} = pantsvalidate(req.body)
        if(error){
            return res.json(error.message)
        
    }
        const Postpants = await pantModel(req.body)
        await Postpants.save()
        res.status(200).send({message:"inserted"})
    })
} catch (error) {
    res.status(400).send(error.message)
}

try {
    pants.put('/:id', async(req,res)=>{
        const puid = req.params.id
        const updatepants = await pantModel.findByIdAndUpdate(puid,req.body, {new:true})
        res.status(200).send({message:"updated"})
    })
} catch (error) {
    res.status(400).send(error.message)
}

try {
    pants.delete('/:id',async(req,res)=>{
        const delid = req.params.id
    const deletepants = await pantModel.findByIdAndDelete(delid)
    res.status(200).send({message:"deleted"})
})
} catch (error) {
    res.status(400).send(error.message)    
}
module.exports=pants