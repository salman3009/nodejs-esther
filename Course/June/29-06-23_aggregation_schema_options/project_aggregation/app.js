const mongoose = require('mongoose');
const Employee = require('./models/employee');

const uri = "mongodb://localhost:27017/aggregation";

mongoose.connect(uri).then(()=>{
    console.log("database is connected");
    createOperation();
}).catch(()=>{
    console.log("database is failed");
})

const createOperation=async()=>{
    try{
        const employeePost = new Employee({
            firstName:'ganesh',
            age:22,
            status:true,
            hobbies:['swimming'],
            salary:18000
        })
        const result = await employeePost.save();
        console.log(result);
    }catch(err){
        console.log(err);
    }
}

