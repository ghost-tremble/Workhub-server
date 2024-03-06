const { sendData } = require("../../utils/responseHelpers");

const forgotPassword =  async (req,res) =>{ 
    sendData(res,200,{
        message:"password reset email sent"
    })
}


module.exports =  forgotPassword;
