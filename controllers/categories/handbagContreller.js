const express = require ('express')
const handbag = express()
const { default: axios } = require('axios')
const Joi = require('joi')
const handbagModel = require('../../models/cotegories/handbagsSchema')


try {
    handbag.get('/',async(req,res)=>{
        const handbagget = await handbagModel.find()
        res.status(200).send(handbagget)

    })
} catch (error) {
    res.status(400).send(error.message)
}
try {
    handbag.get('/:id',async(req,res)=>{
        const getid= req.params.id
        const handbagbyidget = await handbagModel.findById(getid)
        res.status(200).send(handbagbyidget)
    })
} catch (error) {
res.status(400).send(error.message)
}

const handbagvalidate = (handbagData) =>{
    const handbag = Joi.object({
        Type:Joi.string().required(),
        Size:Joi.string().required(),
        Color:Joi.string().required(),
        Quantity:Joi.number().required(),
        Price:Joi.string().required(),
        Image:Joi.string().required(),
        description:Joi.string().required()
    })
    return handbag.validate(handbagData)
}
try {
    
    handbag.post('', async(req,res)=>{
        const{error} = handbagvalidate(req.body)
        if(error){
            return res.json(error.message)
        
    }
        const Posthandbag = await handbagModel(req.body)
        await Posthandbag.save()
        res.status(200).send({message:"inserted"})
    })
} catch (error) {
    res.status(400).send(error.message)
}

try {
    handbag.put('/:id', async(req,res)=>{
        const puid = req.params.id
        const updatehandbag = await handbagModel.findByIdAndUpdate(puid,req.body, {new:true})
        res.status(200).send({message:"updated"})
    })
} catch (error) {
    res.status(400).send(error.message)
}

try {
    accessories.delete('/:id',async(req,res)=>{
        const delid = req.params.id
    const deletehandbag = await handbagModel.findByIdAndDelete(delid)
    res.status(200).send({message:"deleted"})
})
} catch (error) {
    // res.status(400).send(error.message)    
}
module.exports=handbag