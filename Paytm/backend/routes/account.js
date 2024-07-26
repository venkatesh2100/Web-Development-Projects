const express = require('express');
const { Account, User } = require('../db');
const { default: mongoose } = require('mongoose');
const { authMiddleware } = require('../middleware');

const router = express.Router();

router.get('/dashboard',authMiddleware,async (req,res) => {
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

router.post('/transfer',authMiddleware,async (req,res) => {
    try {
        const session = await mongoose.startSession();

        session.startTransaction();
        const { to,amount } = req.body;

        const account = await Account.findOne({
            userId : req.userId
        }).session(session) 

        if(!account || account.balance < amount){
            await session.abortTransaction();
            return res.status(400).json({
                message: "Insufficient balance"
            })
        }
    
        const toAccount = await Account.findOne({
            userId : to
        }).session(session)
    
        if(!toAccount){
            await session.abortTransaction()
            return res.status(400).json({
                message: "Invalid account"
            })
        }  
    
        await Account.updateOne({
            userId : req.userId
        },{
            $inc : {
                balance : -amount
            }
        }).session(session)

        await Account.updateOne({
            userId : to
        },{
            $inc : {    
                balance : amount
            }
        }).session(session)
        
        await session.commitTransaction()   
        
        return res.json({
            message: "Transfer successful"
        }) 

    } catch (error) {
        return res.status(400).json({
            message : "error while the query"
        })
    }

})

module.exports = router;
