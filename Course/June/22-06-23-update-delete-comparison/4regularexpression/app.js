const mongoose = require('mongoose');
const uri = "mongodb://localhost:27017/banking";
const Customer = require('./models/customer');

mongoose.connect(uri).then(()=>{
    console.log("database is connected");
    findOperation();
}).catch((err)=>{
    console.log("connection failed",err)
})


const findOperation= async ()=>{
       try{

        //scenario:exact keyword match
        // let result = await Customer.find({fullName:{$regex:'sathis'}});
        //  console.log(result);

        //scenario: case insensitive - approach -1 
        // let result = await Customer.find({fullName:{$regex:'sathis',$options:'i'}});
        // console.log(result);
        
        //scenario: case insensitive - approach -2 
        let result = await Customer.find({fullName:{$regex:/sathis/i}});
        console.log(result);
        
      
      
       }catch(err){
        console.log(err)
       }
}






