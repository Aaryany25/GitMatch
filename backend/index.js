import express from "express" 
import dotenv from "dotenv"
import connectToDB from "./src/db/connect.js"
dotenv.config()
const app = express()
const PORT = process.env.PORT 


connectToDB()
app.get("/",(req,res)=>{
    res.json({status:200,message:"This is backend for GitMatch "})
})
app.listen(PORT,()=>{
    console.log(`Server is Running on Port : ${PORT}`)
})