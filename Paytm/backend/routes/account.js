import express from "express"
import router from "./user";
const {Account ,User } =require("../db")

const app=express.Router();

app.get('/dashboard',authMiddleware,async (req,res) => {
  try {
      const account = await Account.findOne({
          userId : req.userId
      });        
      const user = await User.findById(req.userId)
      return res.json({
          name : user.firstName, 
          balance : account.balance
      })       
  } catch (error) {
      return res.status(404).json({
          message : "user not found"
      })
  }
})

// we do the Transfer step later

module.exports={app};