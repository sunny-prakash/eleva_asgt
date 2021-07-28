const mongoose = require('mongoose');
const joi = require('joi');
const jwt = require('jsonwebtoken');
require('dotenv/config');

const userSchema = mongoose.Schema({
        fullname:{
                type:String,
                required:true,
                minlenght:5,
                maxlength:60
        },
        email:{
                type:String,
                required:true,
                minlength:10,
                maxlength:255,
                unique:true
        },
        password:{
                type:String,
                required:true,
                minlenght:5,
                maxlength:1024
        },
        address:{
                type:String,
                required:true,
                minlength:10,
                maxlength:1024
        },
        username:{
                type:String,
                unique:true,
        }
},{timestamps:true});

userSchema.methods.generateAuthToken = function(){
        const token = jwt.sign({_id:this._id},process.env.JWT_SECRET_KEY);
        return token;
}


const User = mongoose.model('User',userSchema);

function validateUser(user){
        const schema = joi.object({
                fullname:joi.string().min(5).max(60).required(),
                email:joi.string().min(10).max(255).email().required(),
                password:joi.string().min(5).max(1024).required(),
                address:joi.string().min(10).max(1024).required(),
                username: joi.string()
        })
        return schema.validate(user);
}
module.exports.User = User;
module.exports.validate = validateUser;