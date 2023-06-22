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
        
        //$eq
        //let result = await Customer.find({fullName:{$eq:'suresh'}});

        //$ne
        let result = await Customer.find({fullName:{$ne:'suresh'}});
        console.log(result);
      
       }catch(err){
        console.log(err)
       }
}






