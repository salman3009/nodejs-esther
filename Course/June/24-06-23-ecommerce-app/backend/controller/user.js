const User = require('../models/user');

const createUser= async(req,res)=>{
   try{
    console.log(req.body);
    const post= new User({
        userName:req.body.userName,
        email:req.body.email,
        password:req.body.password
    })
    let result = await post.save();
    res.status(201).json({
        message:"successful",
        post:result
    })
   }catch(err){
    res.status(500).json({
        message:err.message?err.message:'internal server error'
    })
   }
}

module.exports.createUser = createUser;