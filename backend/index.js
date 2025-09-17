import express from "express" 
import dotenv from "dotenv"
dotenv.config()
const app = express()
const PORT = process.env.PORT 
app.get("/",(req,res)=>{
    res.json({status:200,message:"This is backend for GitMatch "})
})
app.listen(PORT,()=>{
    console.log(`Server is Running on Port : ${PORT}`)
})