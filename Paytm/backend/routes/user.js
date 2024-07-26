const express = require('express');
const z = require('zod');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');
const { User, Account } = require('../db');
const { authMiddleware } = require('../middleware');

const router = express.Router();

const signupSchema = z.object({
    username : z.string().email(),
    password : z.string(),
    firstName : z.string(),
    lastName : z.string(),
})

router.post('/signup',async (req,res) => {
    const { success} = signupSchema.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const userExists = await User.findOne({
        username : req.body.username
    })

    if(userExists){
        return res.status(411).json({
            message: "Email already taken."
        })
    }

    const user = await User.create({
        username : req.body.username,
        password : req.body.password,
        firstName : req.body.firstName,
        lastName : req.body.lastName,
    });

    const userId = user._id;
 
    await Account.create({
        userId,
        balance : 1 + Math.random()*10000 
    })

    const token = jwt.sign({
        userId
    },JWT_SECRET);

    return res.json({
        message: "User created successfully",
        token
    })
})


const signinSchema = z.object({
    username : z.string().email(),
    password : z.string()
})

router.post('/signin',async (req,res) => {
    const { success } = signinSchema.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    } 
    const userExists = await User.findOne({
        username : req.body.username,
        password : req.body.password
    })

    if(!userExists){
        return res.status(411).json({
            message: "Error while logging in"
        })
    }   

    const token = jwt.sign({
        userId : userExists._id 
    },JWT_SECRET);

    return res.json({
        token
    })
})

const updateSchema = z.object({
    password : z.string().optional(), 
    firstName : z.string().optional(), 
    lastName : z.string().optional() 
})

router.put("/",authMiddleware,async (req,res) => {
    const { success } = updateSchema.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message: "Error while updating information"
        }) 
    }
    try {
        await User.findByIdAndUpdate(req.userId, req.body)
    } catch (error) {
        return res.status(403).json({
            message : error
        })
    }

    return res.json({
        message: "Updated successfully"
    })
})  

router.get('/bulk',async (req,res) => {
    const filter = req.query.filter || "";
    const users = await User.find({
        $or : [{
            firstName : {
                "$regex" : filter
            }
        },{
            lastName : {
                "$regex" : filter
            }
        }]
    }) 
    res.json({
        user : users.map(user => ({
            username : user.username,
            firstName : user.firstName,
            lastName : user.lastName,
            _id : user._id,
        }))
    })
})

module.exports = router;
