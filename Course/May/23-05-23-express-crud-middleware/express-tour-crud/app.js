const express = require('express');
const app = express();

app.get('',(req,res)=>{
   res.sendFile(__dirname+"/index.html");
})

app.post('/register',(req,res)=>{
   res.send("successfully");
})

app.listen(3000,()=>{
    console.log("server is running on 30000");
})