const express = require('express');
const app = express();
const fs = require('fs');
const env = require('dotenv');
env.config();


const list = JSON.parse(fs.readFileSync(`${__dirname}/data/tour.json`));
console.log(list);

app.get('',(req,res)=>{
    res.send(list);
});

app.listen(process.env.PORT,()=>{
    console.log("server is running on",process.env.PORT);
})