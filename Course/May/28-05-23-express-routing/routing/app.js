const express = require('express');
const app = express();
const userRoute = require('./routes/user');
const path = require('path');
const env = require('dotenv');
env.config();


app.use('',express.static(path.join(__dirname,'views')));
app.use('/api/user',userRoute);

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on ${process.env.PORT}`)
});