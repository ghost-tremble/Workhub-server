const User = require("../../Model/User")
const bcrpt =  require("bcrypt")
const { sendData, sendError, sendCustomError } = require("../../utils/responseHelpers")

const signUp = async (req,res)=>{

// hash password
try{
    const hashPassword = await bcrpt.hash(req.body.password,10)
    const user = await  User.create({...req.body,password:hashPassword});
     if(!user)
     return sendError(res,400,{message:"an error has occured"})

    sendData(res,200,{message:"account created successfully"})
}
 
catch(err){
    console.log(err)
    return sendCustomError(res,err)
}
}


module.exports = signUp;