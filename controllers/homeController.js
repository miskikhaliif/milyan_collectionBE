const express = require ('express')
const joi = require('joi')
const homestiting = express()

const homestitingmodel =require('../models/homeSchema')

//get
homestiting.get('',async(req,res)=>{
    const gethome =await homestitingmodel.find()
    res.json(gethome)
})


//validation
const homesvalidate = (homeStdata) =>{
    const homeS = joi.object({
        Title:joi.string().required(),
        Logo:joi.string().required(),
        Name:joi.string().required(),
        address:joi.string().required(),
        email:joi.string().required(),
        phone:joi.number().required(),
        whatapp:joi.number().required(),
        Facebook:joi.string().required(),
        Instagram:joi.string().required(),
        tiktok:joi.string().required(),
        Herotitle:joi.string().required(),
        HeroDiscritpion:joi.string().required(),
        HerImage:joi.string().required(),
        Footertext:joi.string().required()
    })
    return homeS.validate(homeStdata)
}
//post
try {
    homestiting.post('',async(req,res)=>{
        const{error} = homesvalidate(req.body)
        if(error){
            return res.json(error.message)
        }
         const posthome = await homestitingmodel(req.body)
        await posthome.save()
        res.status(200).send({message:"sucessfully posted"})
    })
    
} catch (error) {
    res.status(400).send(error.message)
}

//put
try {
    homestiting.put('/:id',async(req,res)=>{
        const hid = req.params.id
        const puthome = await homestitingmodel.findByIdAndUpdate(hid,req.body,{new:true})
        res.status(200).send({message:"updated"})
    })
} catch (error) {
    res.status(400).send(error.message)
}
//delete
try {
    homestiting.delete('/:id',async(req,res)=>{
        const homeid = req.params.id
        const delhome = await homestitingmodel.findByIdAndDelete(homeid)
        res.status(200).send({message:"deleted"})
    })
} catch (error) {
    res.status(400).send(error.message)
}
//getid
try {
    homestiting.get('/:id',async(req,res)=>{
        const hoem= req.params.id
        const getoenhome = await homestitingmodel.findById(hoem)
        res.status(200).send(getoenhome)
    })
} catch (error) {
    res.status(400).send(error.message)
}


module.exports=homestiting;