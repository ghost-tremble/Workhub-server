const mongoose = require('mongoose');
const { userTypes } = require('../utils/constants');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  userType: {
    type: String,
    enum: [userTypes.corporate, userTypes.individual],
  },
  companyName: {
    type: String,
  },
  password: {
    type: String,  // Fix: 'Type' should be 'type'
    required: true,
  },
  profilePicture: {
    type: String
  },
  preferences: {
    type: Array,
    default: [],
  },
  // shareCode: {
  //   type: String,
  //   required: true,
  // }
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

module.exports = User;
