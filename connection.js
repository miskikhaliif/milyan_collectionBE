const mongoose= require ('mongoose')
require('dotenv').config()

const dbConnection = async () =>{
    try {
      await mongoose.connect(process.env.DB_CONNECT)
        console.log("connected")
    } catch (error) {
        console.log("not connected")
        
    }
   
}
module.exports = dbConnection