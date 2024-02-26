const mongoose = require('mongoose');
const {userTypes} = require('../utils/constants');
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  type:{
    type: String,
    enum: [userTypes.corporate, userTypes.individual],
    required: true,
  }
,
companyName: {
  type: String,
},
password:{
  Type:String,
  required:true
},
preferences: {
  type: Array,
  default: []
},
shareCode:{
  type:String,
  required:true
}


}, { timestamps: true });
