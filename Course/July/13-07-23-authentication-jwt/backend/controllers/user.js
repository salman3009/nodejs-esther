const User = require('../models/User');
const bcrypt = require('bcrypt');

const register = async(req,res)=>{
  try{
    const {userName,email,password} = req.body;

    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(password,salt);

    const user = new User({
        userName,
        email,
        password:hashedPassword
    })

    const result = await user.save();
    res.status(201).json({
        user:{result}
    })

  }catch(err){
    return res.status(400).json({
        message:err
    })
  }
}

module.exports.register = register;