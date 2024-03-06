const mongoose = require('mongoose');

const BookingsSchema = new mongoose.Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  workspace: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'workspace',
    required: true,
  },
durationStart : {type:Number,
required: true,
},
durationEnd : {type:Number,required: true,},
capacity : {type:Number,required: true,},



}, { timestamps: true });


const Booking = mongoose.model('Booking', BookingsSchema);


module.exports = Booking;
