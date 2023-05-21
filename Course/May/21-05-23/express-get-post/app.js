const express = require('express');
const app = express();

app.get('',(req,res)=>{
  res.status(200).json({message:"fetched successfully"});
})



app.listen(3000,()=>{
    console.log("server is running on 3000");
})