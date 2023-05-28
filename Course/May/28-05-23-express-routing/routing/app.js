const express = require('express');
const app = express();
const userRoute = require('./routes/user');
const env = require('dotenv');
env.config();

app.use('/api/user',userRoute);

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on ${process.env.PORT}`)
});