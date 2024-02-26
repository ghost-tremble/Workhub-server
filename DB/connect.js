const mongoose = require("mongoose");


const uri = process.env.MONGODB_URI
const connect = async ()=>{
    mongoose.connect(uri)
    .then(() => {
      console.log('Connected to the MongoDB server');
    })
    .catch(err => console.error('Error connecting to MongoDB:', err));
}


module.exports = connect;