const mongoose = require('mongoose');
const {workSpaceTypes} = require('../utils/constants');
const WorkspaceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type:{
    type: String,
    enum: [...workSpaceTypes],
    required: true,
  }
,
host:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Host',
    required: true,
},

availaibility: {type: Boolean, default: true},
spaces :{type:number , default: 0}
}, { timestamps: true });


const User = mongoose.model('User', WorkspaceSchema);


module.exports = User;
