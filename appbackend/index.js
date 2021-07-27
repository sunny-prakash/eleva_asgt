const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const auth = require('./routes/auth');

const app = express();

mongoose.connect('mongodb://localhost/elevaAsgt',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=> console.log("Database is connected..."))
.catch(err=>console.log("Database failed to connect ",err));

//Middlewares
app.use(express.json());
app.use(cors());


app.use('/api/auth',auth);


const port = process.env.PORT || 8080;

app.listen(port,()=>console.log(">> Server is up and running on port : "+ port));