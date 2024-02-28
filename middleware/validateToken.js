const jsonwebtoken = require('jsonwebtoken')
const { sendCustomError, sendError } = require('../utils/responseHelpers')


const validateToken = async (req,res,next)=>{

    try{
        const token = req.headers?.authorization?.split(' ')[1]
        const decoded =jsonwebtoken.verify(token,process.env.SECRET_KEY)
if(!decoded) return sendError(res,401,"invalid token")
        // Append the decoded token to the request object
        req.user = decoded
        next()
    }

    catch(err){
        return sendCustomError(res,err)
    }

} 


module.exports = validateToken