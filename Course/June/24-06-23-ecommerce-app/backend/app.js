const express = require('express');
const app = express();
const userRoute = require('./routes/user');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/amazon').then(()=>{
    console.log("connected");
}).catch(()=>{
    console.log("connection failed");
})

app.use(express.json());
app.use('/api/user',userRoute);


app.listen(8080,()=>{
     console.log("server is running on 8080")
})