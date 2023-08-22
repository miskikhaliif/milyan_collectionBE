const express = require ('express')
const gallery = express()

const imageGallery = require ('../models/imagesSchema')
const Joi = require('joi')
//get
try {
    gallery.get('',async(req,res)=>{
        const getgallery = await imageGallery.find()
        res.status(200).send(getgallery)
    }) 
} catch (error) {
    res.status(400).send(error.message)
}

//getid
try {
    gallery.get('/:id',async(req,res)=>{
        const getone=req.params.id
        const getonegallery = await imageGallery.findById(getone)
        res.status(200).send(getonegallery)
    })
} catch (error) {
    res.status(400).send(error.message)
}

//validation
const galleryvalidae= (galletdata)=>{
    const gallary = Joi.object({
        img_title:Joi.string().required(),
        image:Joi.string().required()
    })
    return gallary.validate(galletdata)
}

//post
try {
    gallery.post('',async(req,res)=>{
        const {error} = galleryvalidae(req.body)
        if(error){
            return res.json(error.message)
        }
            const postgallery = await imageGallery(req.body)
            await postgallery.save()
            res.status(200).send({message:"inserted"})
        })
    } catch (error) {
        res.status(400).send(error.message)
    }

    //put
    try {
        gallery.put('/:id',async(req,res)=>{
            const putid = req.params.id
            const putgallery = await imageGallery.findByIdAndUpdate(putid, req.body,{new:true})
            res.status(200).send({message:"updated"})
        })
        
    } catch (error) {
        res.status(400).send(error.message)
    }

    //delete
    try {
        gallery.delete('/:id',async(req,res)=>{
            const delid = req.params.id
            const dletegallery = await imageGallery.findByIdAndDelete(delid)
            res.status(200).send({message:"deleted"})
        })
    } catch (error) {
        res.status(400).send(error.message)
    }



module.exports=gallery;