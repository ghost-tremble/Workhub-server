const User = require("../Model/User");
const sample = async(req,res) => {
    const  newUser = await User.create({email:"hello"});

   return res.send({
        success:true,
        data:newUser
    })
}

module.exports = sample;