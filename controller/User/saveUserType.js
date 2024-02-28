const User = require("../../Model/User")
const bcrpt =  require("bcrypt")
const { sendData, sendError, sendCustomError } = require("../../utils/responseHelpers")

const saveUserType = async (req,res)=>{

try{
    const {id} =  req.user
    const user = await  User.findOneAndUpdate({_id:id},{userType:req.body.userType},{upsert:true});
     if(!user)
     return sendError(res,400,{message:"an error has occured"})

    sendData(res,200,{message:"userType is updated successfully"})
}
 
catch(err){
    console.log(err)
    return sendCustomError(res,err)
}
}


module.exports = saveUserType;