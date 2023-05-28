const express = require('express');
const app = express();
const env = require('dotenv');
env.config();


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on ${process.env.PORT}`)
});