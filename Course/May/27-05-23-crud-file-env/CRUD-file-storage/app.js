const express = require('express');
const app = express();
const fs = require('fs');
const env = require('dotenv');
const exp = require('constants');
env.config();

app.use(express.json());

const list = JSON.parse(fs.readFileSync(`${__dirname}/data/tour.json`));
console.log(list);

app.get('',(req,res)=>{
    res.send(list);
});

app.post('',(req,res)=>{
   let product = req.body;
   product.id = list.length+1;
   list.push(product);
   fs.writeFile(`${__dirname}/data/tour.json`,JSON.stringify(list),()=>{
      res.status(201).send("<h1>Data added successfully");
   })

})

app.listen(process.env.PORT,()=>{
    console.log("server is running xon",process.env.PORT);
})