const mongoose = require('mongoose');
const Employee = require('./models/employee');

const uri = "mongodb://localhost:27017/aggregation";

mongoose.connect(uri).then(()=>{
    console.log("database is connected");
   // createOperation();
   findOperationAggregation();
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

const findOperationAggregation=async()=>{
    try{
    
    //$project
    // let result = await Employee.aggregate([{$project:{firstName:1,age:1,salary:1,_id:0}}]);

    //$match
    // let result = await Employee.aggregate([
    //     {$match:{firstName:'sathish',age:{$gte:25}}},
    //     {$project:{firstName:1,age:1,salary:1,_id:0}}
    // ])

    // let result = await Employee.aggregate([
    //     {$match:{firstName:'sathish'}},
    //     {$match:{age:{$gte:25}}},
    //     {$project:{firstName:1,age:1,salary:1,_id:0}}
    // ])

    //$sort
    let result = await Employee.aggregate([
        {$match:{age:{$gte:25}}},
        {$sort:{salary:1}},
        {$project:{firstName:1,age:1,salary:1,_id:0}}
    ])

     
     console.log(result);
    }catch(err){
        console.log(err);
    }
}