const User = require("../../Model/User")
const bcrpt =  require("bcrypt")
const { sendData, sendError, sendCustomError } = require("../../utils/responseHelpers")

const getUser = async (req,res)=>{

try{
    const {id} =  req.user
    const user =  await User.findOne({_id:id})
     if(!user)
     return sendError(res,400,{message:"an error has occured"})

    sendData(res,200,{
        data:{user:{
           ...user.toObject()
        }},
        message:"success"})
}
 
catch(err){
    console.log(err)
    return sendCustomError(res,err)
}
}


module.exports = getUser;


