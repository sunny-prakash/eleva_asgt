const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const auth = require('./routes/auth');
const {User} =require('./models/user');

const app = express();

mongoose.connect('mongodb://localhost/elevaAsgt',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=> console.log("Database is connected..."))
.catch(err=>console.log("Database failed to connect ",err));

//Middlewares
app.use(express.json());
app.use(cors());


app.use('/api/auth',auth);

app.get('/api/getuser/:id',async (req,res)=>{
    console.log(req.params.id);
    // let user = await User.findOne(req.params.id);
    // if(!user) return res.status(400).send({message:"No user Found"});
    // return res.status(200).send({username:user.username,fullname:user.fullname,address:user.address});
})

const port = process.env.PORT || 8080;

app.listen(port,()=>console.log(">> Server is up and running on port : "+ port));