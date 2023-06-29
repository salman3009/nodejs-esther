const mongoose = require('mongoose');
const Employee = require('./models/employee');

const uri = "mongodb://localhost:27017/aggregation";

mongoose.connect(uri).then(()=>{
    console.log("database is connected");
}).catch(()=>{
    console.log("database is failed");
})

