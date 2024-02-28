const User = require("../../Model/User")
const bcrpt =  require("bcrypt")
const jwt =  require("jsonwebtoken")


const { sendData, sendError, sendCustomError } = require("../../utils/responseHelpers")

const login = async (req,res)=>{
const {email,password} = req.body 
try{

    //check if user Exist and password Valid 

    const user = await User.findOne({email})
const isPasswordValid = await bcrpt.compare(password,user.password)

    if(!user ||!isPasswordValid){
        return sendError(res,401,{message:"email or password is invalid"})
    }

   const token = await jwt.sign({
    email:user.email, id:user._id
  }, process.env.SECRET_KEY, { expiresIn: '1h' });

  if (!token)
     return sendError(res,400,{message:"an error has occured"})

    sendData(res,200,{token,message:"login successfully"})
}
 
catch(err){
    console.log(err)
    return sendCustomError(res,err)
}
}


module.exports = login;