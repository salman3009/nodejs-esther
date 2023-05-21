const express = require('express');
const app = express();

//http://localhost:3000
app.get('',(req,res)=>{
  res.status(200).json({message:"fetched successfully"});
})

//http://localhost:3000
app.post('',(req,res)=>{
    console.log("inside the post method");
     res.status(201).json({message:"Data is created successfully"});
})


app.listen(3000,()=>{
    console.log("server is running on 3000");
})