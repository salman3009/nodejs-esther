const express = require('express');
const app = express();
const parser = require('body-parser');

app.use(parser.json());
app.use(parser.urlencoded({extended:false}));

app.get('',(req,res)=>{
   res.sendFile(__dirname+"/index.html");
})

app.post('/register',(req,res)=>{
    console.log(req.body);
   res.send("successfully");
})

app.listen(3000,()=>{
    console.log("server is running on 30000");
})