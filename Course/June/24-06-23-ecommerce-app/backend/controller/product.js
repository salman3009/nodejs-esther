const Product = require('../models/product');

const createProduct= async(req,res)=>{
   try{
    console.log(req.body);
    const post= new Product({...req.body});
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

module.exports.createProduct = createProduct;


