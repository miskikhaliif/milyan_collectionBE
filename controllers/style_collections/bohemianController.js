const express = require ('express')
const bohemian = express()
const { default: axios } = require('axios')
const Joi = require('joi')
const bohemianModel = require('../../models/style_collection/bohemianSchema')


try {
    bohemian.get('/',async(req,res)=>{
        const bohemianget = await bohemianModel.find()
        res.status(200).send(bohemianget)
    })
} catch (error) {
res.status(400).send(error.message)
}
try {
    bohemian.get('/:id',async(req,res)=>{
        const getid= req.params.id
        const bohemianbyidget = await bohemianModel.findById(getid)
        res.status(200).send(bohemianbyidget)
    })
} catch (error) {
res.status(400).send(error.message)
}

const bohemianvalidate = (bohemianData) =>{
    const bohemian = Joi.object({
        Size:Joi.string().required(),
        Color:Joi.string().required(),
        Quantity:Joi.number().required(),
        Price:Joi.string().required(),
        Image:Joi.string().required(),
        description:Joi.string().required()
    })
    return bohemian.validate(bohemianData)
}
try {
    
    bohemian.post('', async(req,res)=>{
        const{error} = bohemianvalidate(req.body)
        if(error){
            return res.json(error.message)
        
    }
        const Postbohemian = await bohemianModel(req.body)
        await Postbohemian.save()
        res.status(200).send({message:"inserted"})
    })
} catch (error) {
    res.status(400).send(error.message)
}

try {
    bohemian.put('/:id', async(req,res)=>{
        const puid = req.params.id
        const updatebohemian = await bohemianModel.findByIdAndUpdate(puid,req.body, {new:true})
        res.status(200).send({message:"updated"})
    })
} catch (error) {
    res.status(400).send(error.message)
}

try {
    bohemian.delete('/:id',async(req,res)=>{
        const delid = req.params.id
    const deletebohemian = await bohemianModel.findByIdAndDelete(delid)
    res.status(200).send({message:"deleted"})
})
} catch (error) {
    res.status(400).send(error.message)    
}
module.exports=bohemian