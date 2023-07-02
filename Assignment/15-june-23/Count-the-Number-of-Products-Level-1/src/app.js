const express = require('express');
const app = express();
const mongoose = require('mongoose');
var products   =require("../models/product.js");

// Import routes

//Router Middlewares
app.use(express.json());

//Type of query

/*

1. /
2. /?category=phone
3. /?category=laptop --> this means all the product in catgory of laptop
4. /?range=4000-5000 --> this means all the product in the range of 4000-5000
5. /?range=5000  --> this means all the product above 5000
6. /?range=4000-5000&category=laptop --> all the laptop that are in price range 4000-5000

*/


// Complete this Route which will return the count of number of products in the range/

app.get("/",async function(req,res){

    var count = 0;

    //Write you code here
    //update count variable 

    res.send(JSON.stringify(count));

});

module.exports = app;
