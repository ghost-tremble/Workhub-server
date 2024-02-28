const User = require("../../Model/User")
const bcrpt =  require("bcrypt")
const { sendData, sendError, sendCustomError } = require("../../utils/responseHelpers")

const editPreferences = async (req,res)=>{

try{
    const {id} =  req.user
    const {preferences} = req.body
    const user = await  User.findOneAndUpdate({_id:id},{preferences},{upsert:true});
     if(!user)
     return sendError(res,400,{message:"an error has occured"})

    sendData(res,200,{message:"preferences updated"})
}
 
catch(err){
    console.log(err)
    return sendCustomError(res,err)
}
}


module.exports = editPreferences;