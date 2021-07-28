const express = require("express");
const router = express.Router();
const {User,validate} = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv/config');

router.post('/signup',async (req,res)=>{
    let {fullname,email,password,address,username} = req.body;
    
    const {error} = validate(req.body);
    if(error) return res.status(400).send({message:error.details[0].message});
    let user = await User.findOne({username});
    if(user) return res.status(400).send({message:"User is already registered"});

    passwordSalt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password,passwordSalt);

    user = new User({fullname,username,email,password,address});
    user = await user.save();
    res.status(200).send({message:"Signup Successfully"});

})

router.post('/login',async (req,res)=>{
    const {username,password} =req.body;
    let user = await User.findOne({username});
    if(!user) return res.status(400).send({message:'Invalid Username/Password'});
    if(bcrypt.compare(password,user.password)){
        return res.status(200).send({message:"Login Succefully",data:{token:user.generateAuthToken(),id:user.id}});
    }
    return res.status(400).send({message:'Invalid Username/Password'});
});



module.exports = router;