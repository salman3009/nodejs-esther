const express = require('express');
const app = express();
const env = require('dotenv');
env.config();

app.get('',(req,res)=>{
    res.send("hello world");
});

app.listen(process.env.PORT,()=>{
    console.log("server is running on",process.env.PORT);
})