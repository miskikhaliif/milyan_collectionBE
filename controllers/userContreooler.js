const express = require('express')
const user=express()
const joi =require('joi')
let bcrypt= require('bcrypt')
let jwt= require('jsonwebtoken')
const usermodel = require('../models/userSchema')


//get
try {
    user.get('',async(req,res)=>{
        const getuser = await usermodel.find()
        res.status(200).send(getuser)
    })
} catch (error) {
    res.status(400).send(error.message)
}

//getid
try {
    user.get('/:id',async(req,res)=>{
        const userid =req.params.id
        const getoneuser = await usermodel.findById(userid)
        res.status(200).send(getoneuser)
    })
} catch (error) {
    res.status(400).send(error.message)
}

//validate
const uservalidate = (userdata)=>{
    const users = joi.object({
        name:joi.string().required(),
        username:joi.string().required(),
        password:joi.string().required(),
        status:joi.string().required(),
        role:joi.string().required()
    })
    return users.validate(userdata)
    
}

//post
try {
    user.post('/',async(req,res)=>{
        try {
         const{error}=uservalidate(req.body)
         if(error){
             return res.json(error.message)
         }
         const userobj= await new usermodel(req.body)
     
         const salt= await bcrypt.genSalt(10)
     
         userobj.password= await bcrypt.hash(userobj.password,salt)
         
     
         await userobj.save()
     const token=jwt.sign({
         id:userobj._id,
         username:userobj.username,
         password:userobj.password
     },"SecretKey")
     
     
          res.json({message:'succesfully posted',token:token})
        } catch (error) {
         res.status(200).send(error.message)
        }
     })
     
    } catch (error) {
        res.status(400).send(error.message)
    }
    
    //put
    try {
        user.put('/:id',async(req,res)=>{
            const uid = req.params.id
            const putuser = await usermodel.findByIdAndUpdate(uid,req.body,{new:true})
            res.status(200).send({message:"updated"})
        })
    } catch (error) {
        res.status(400).send(error.message)
    }

    //delete
    try {
        user.delete('/:id',async(req,res)=>{
            const useid = req.params.id
            const deleteuser = await usermodel.findByIdAndDelete(useid)
            res.status(200).send({message:"deleted"})
        })
    } catch (error) {
        res.status(400).send(error.message)
    }
    




module.exports=user

