const express =require("express")
const { default: router } = require("./user")

const app=express.Router();

const jwt=require("jsonwebtoken");

const {JWT_TOKEN}=require("../config");

// read the data 
app.get('/',(req,res)=>{
  const token=req.headers.authorization.split('')[i];
  try{
    jwt.verify(token,JWT_TOKEN);
    res.status(400).json({
      isAuthenticated:true
    })
  }catch(error){
    return res.json({
      isAuthenticated:false
    })

  }
})


module.exports={app}