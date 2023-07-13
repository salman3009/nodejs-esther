const {Schema,model} = require('mongoose');

const UserSchema = new Schema({
    userName:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    }
})

module.exports = model('user',UserSchema)