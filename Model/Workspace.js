const mongoose = require('mongoose');
const {workSpaceTypes} = require('../utils/constants');
const WorkspaceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type:{
    type: String,
    enum: [workSpaceTypes.conferences,workSpaceTypes.hub,workSpaceTypes.private],
    required: true,
  },
  postCode:{
    type: String,
    required: true,
  }, 
  address:{
    type: String,
    required: true,
  },
  description:{
type: String,
    required: true,
  },
  amenities:{
    type: Array,
    default: [],
  },
image:{
type: String,
},
images:{
  type: Array,
  default: [],
},
user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
},

availaibility: {type: Boolean, default: true},
spaces :{type:Number , default: 0}
}, { timestamps: true });


const Workspace = mongoose.model('Workspace', WorkspaceSchema);


module.exports = Workspace;
