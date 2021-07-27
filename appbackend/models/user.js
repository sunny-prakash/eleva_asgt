const mongoose = require('mongoose');
const joi = require('joi');
const jwt = require('jasonwebtoken');

const userSchema = mongoose.Schema({
        name:{
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
                minlenght:8,
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


const User = mongoose.model('User',userSchema);

function validateUser(user){
        const schema = joi.object({
                name:joi.string().min(5).max(60).required(),
                email:joi.string().min(10).max(255).email().required(),
                password:joi.string().min(8).max(1024).required(),
                address:joi.string().min(10).max(1024).required(),
                username: joi.string()
        })
}
module.exports.User = User;
module.exports.validate = validateUser;