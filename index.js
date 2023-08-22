const express = require ('express')
const app=express()
const mongodb = require('mongoose')
require('dotenv').config()
app.use(express.json())

const dbConnection = require('./connection')
dbConnection()

const shirt = require('./routes/catergories/bottom/shirtRoute')
const blouses = require('./routes/catergories/bottom/blousesRoute')
const sweater = require('./routes/catergories/bottom/sweaterRoute')
const jeans = require('./routes/catergories/top/jeansRoute')
const pant = require('./routes/catergories/top/pantsRoute')
const skirt= require('./routes/catergories/top/skirtsRoute')

const jawelry = require('./routes/catergories/jawelryRouter')
const handbag = require('./routes/catergories/handbagRouter')
const outerwear = require('./routes/catergories/outetewarRouter')
const accessories= require('./routes/catergories/accessoriesRouter')
const dress= require('./routes/catergories/dressRouter')

const casual = require('./routes/style_collection/casualRouter')
const bohemian = require('./routes/style_collection/bohemianRouter')
const boho = require('./routes/style_collection/glamRouter')
const glam= require('./routes/catergories/accessoriesRouter')
const streat= require('./routes/style_collection/streatweerRouter')
const formal= require('./routes/style_collection/formalRouter')

const users=require('./routes/userRoute')
const imag = require('./routes/imageRoute')
const abouts =require('./routes/aboutRoute')
const homestitings =require('./routes/homeRoute')
const login = require ('./controllers/login')


app.listen(process.env.PORT_NUNBER,async()=>{
    console.log("port is running")
})
//bottom
app.use("/shirts",shirt)
app.use("/blouses",blouses)
app.use("/sweaters",sweater)
//top
app.use("/jeans",jeans)
app.use("/pants",pant)
app.use("/skirts",skirt)


app.use("/dress",dress)
app.use("/access",accessories)
app.use("/jawelry",jawelry)
app.use("/outer",outerwear)
app.use("/hand",handbag)

app.use("/bohemian",bohemian)
app.use("/baho",boho)
app.use("/casual",casual)
app.use("/formal",outerwear)
app.use("/glam",glam)
app.use("/streatweer",streat)


app.use("/home",homestitings)
app.use("/login",login)
app.use("/abouts",abouts)
app.use("/imageGallery",imag)
app.use("/users",users)