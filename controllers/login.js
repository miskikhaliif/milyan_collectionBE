const express= require('express')
const login=express.Router()
let bcrypt= require('bcrypt')
let jwt= require('jsonwebtoken')
const usermodel =require('../models/userSchema')


try {
  login.get('/',async(req,res)=>{
    const allusii =await usermodel.find()
    res.status(200).send(allusii)
})
} catch (error) {
  res.status(400).send(error.message)
}



try {
  login.post('/',async(req,res)=>{
    try {
        const logidata= await  usermodel.findOne({username:req.body.username})
        
        // return res.send(logidata)
            if(!logidata) return res.json('invalid Username')
            const checkp=await bcrypt.compare(req.body.password,logidata.password)
            if(!checkp) return res.send({status:"error",message:"invalid Password"})
            const token=jwt.sign({
              id:logidata._id,
              username:logidata.username,
              password:logidata.password  
            },"keysecret")
            res.header("token",token).json({
                status:'success',
                message:'successfuy loged',
                token:token
            })
        
    } catch (error) {
      res.status(200).send(error.message)  
    }
})
} catch (error) {
  res.status(400).send(error.message)
}


module.exports=login