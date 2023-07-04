const mongoose = require('mongoose');


const employeeSchema = mongoose.Schema({
      firstName:{
        type:String,
        required:[true,'firstName should not be empty']
      },
      age:{
        type:Number,
        required:[true,'age cannot be empty']
      },
      hobbies:{
        type:[String]
      },
      salary:{
        type:Number,
        required:[true,'salary should not be empty']
      }
})

module.exports = mongoose.model('employee',employeeSchema);