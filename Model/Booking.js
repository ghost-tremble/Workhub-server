const mongoose = require('mongoose');

const BookingsSchema = new mongoose.Schema({
  lesson: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'lesson',
    required: true,
  },
durationStart : {type:Number},
durationEnd : {type:Number},
capacity : {type:Number},



}, { timestamps: true });


const User = mongoose.model('User', BookingsSchema);


module.exports = User;
