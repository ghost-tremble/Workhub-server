const User = require("../../Model/User")
const bcrpt =  require("bcrypt")
const { sendData, sendError, sendCustomError } = require("../../utils/responseHelpers")

const updateProfilePicture = async (req,res)=>{

try{
    const {id} =  req.user
    const urlPath =  req.file.path.split("\\")

    // TODO: UPDATE With environment variable for dev and production
    
    const profileUrl = `localhost:5000/images/${urlPath[0]}/${urlPath[1]}`
    console.log(profileUrl)
    const user =  await User.findOneAndUpdate({_id:id},{ profilePicture:profileUrl})
     if(!user)
     return sendError(res,400,{message:"an error has occured"})

     sendData(res, 200,{message:"success"})
    
}
 
catch(err){
    console.log(err)
    return sendCustomError(res,err)
}
}


module.exports = updateProfilePicture;


