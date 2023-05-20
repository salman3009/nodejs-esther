const express = require('express');
const app = express();
const PORT = 3000;


app.get('',(req,res)=>{
  res.send("<h1>Welcome to express</h1>");
})


app.listen(PORT,()=>{
    console.log("server is running on 3000");
})