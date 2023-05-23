const express = require('express');
const app = express();
const parser = require('body-parser');

app.use(parser.json());
app.use(parser.urlencoded({extended:false}));

let user={};

app.get('',(req,res)=>{
   res.sendFile(__dirname+"/index.html");
})

app.post('/register',(req,res)=>{
    if(req.body.email && req.body.userName && req.body.password){
        user=req.body;
        res.sendFile(__dirname+'/login.html');
    }
    else{
        res.sendFile(__dirname+"/error.html");
    }
})

app.listen(3000,()=>{
    console.log("server is running on 30000");
})