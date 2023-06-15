const mongoose = require('mongoose');
const uri = "mongodb://localhost:27017/banking";
const Customer = require('./models/customer');

mongoose.connect(uri).then(()=>{
    console.log("database is connected");
    // createOperation();
    findOperation();
}).catch((err)=>{
    console.log("connection failed",err)
})

const createOperation=async()=>{
    try{

        const customerPost = new Customer({
            fullName:"akash",
            age:45,
            status:false,
            hobbies:['football','music'],
            salary:15000
        })

        const result = await customerPost.save();
        console.log(result);

    }catch(err){
        console.log(err);
    }
}

const findOperation= async ()=>{
       try{
        let result = await Customer.find();
        console.log(result);
        //final data in array format
       }catch(err){
        console.log(err)
       }
}
