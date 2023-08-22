const express = require ('express')
const joi = require ('joi')
const about = express()

const aboutmodel =require ('../models/aboutSchema')
//get
try {
    about.get('',async(req,res)=>{
        const getabout = await aboutmodel.find()
        res.status(200).send(getabout)
    })
    
} catch (error) {
    res.status(400).send(error.message)
}

//getid
try {
    about.get('/:id',async(req,res)=>{
        const getone=req.params.id
        const getoneabout = await aboutmodel.findById(getone)
        res.status(200).send(getoneabout)
    })
    
} catch (error) {
    res.status(400).send(error.message)
}
//validation

    const aboutvalidate = (aboutdata) =>{
        const abou = joi.object({
            fahfaahin_yar:joi.string().required(),
            fahfaahin:joi.string().required()
        })
        return abou.validate(aboutdata)

    }
//post
try {
    about.post('',async(req,res)=>{
        const {error} = aboutvalidate(req.body)
        if(error){
            return res.json(error.message)
        }
        const postabout = await aboutmodel(req.body)
        await postabout.save()
        res.status(200).send({message:"successfully posted"})
    }) 
    
} catch (error) {
    res.status(400).send(error.message)
}
//put
try {
    about.put('/:id',async(req,res)=>{
        const putid = req.params.id
        const putabout= await aboutmodel.findByIdAndUpdate(putid, req.body,{new:true})
        res.status(200).send({message:"sucessfully updated"})
    })   
} catch (error) {
    res.status(400).send(error.message)
}

//delete
try {
    about.delete('/:id',async(req,res)=>{
        const delid = req.params.id
        const dleteabout = await aboutmodel.findByIdAndDelete(delid)
        res.status(200).send({message:"succesfully deleted"})
    })
    
} catch (error) {
    res.status(400).send(error.message)
}


module.exports=about;