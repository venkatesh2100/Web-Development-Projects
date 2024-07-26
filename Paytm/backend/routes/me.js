const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

router.get('/', async(req,res) => {
    const token = req.headers.authorization.split(' ')[1];
    try {
        jwt.verify(token,JWT_SECRET);
        return res.json({
            isAuthenticated : true
        });            
    } catch (error) {
        return res.json({
            isAuthenticated : false
        })
    }   
})

module.exports = router