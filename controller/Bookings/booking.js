
const { sendError, sendData } = require("../../utils/responseHelpers")
const Booking = require ("../../Model/Booking")

const createBooking  = async(req,res) => {
    try{
        // implement images upload to s3 bucket
        const {workspaceId , durationStart, durationEnd,capacity}= req.body
        const {id} = req.user
        const booking = await Booking.create({user:id,  booking:workspaceId, durationStart, durationEnd, capacity})
        if(!booking) return sendError(res, 400,{message:"an error has occured"})
 
        // mail booking details to user

        sendData(res,200,{message:"booking created successfully", data:booking})
        
    }

    catch (err){
        console.log(err)
        return sendError(res, 400,{message:"an error has occured"})
        
    }

}



    const getSingleBooking = async (req,res)=>{
        try {
            const {id} =  req.user
            const booking = await Booking.findOne({
                user:id,
                _id:req.params.id
            })
        
            if(!booking) return sendError(res,400,{message:"error fetching booking"})
            sendData(res,200,{message:"success",data:booking})
        } catch (error) {
            console.log(error)
            sendCustomError(res,500)
            
        }
        
        }



    const getAllBookings = async (req,res)=>{
        try {
const {id} = req.user
            const  {query} =  req.query
            const regex =  new RegExp(query, 'i');

            const booking = await Booking.find({user:id},{
                $or:[
                    {name:regex}
                ]
            })
        
            if(!booking) return sendError(res,400,{message:"error fetching booking"})
            sendData(res,200,{message:"success",data:booking})
        } catch (error) {
            console.log(error)
            sendCustomError(res,500)
            
        }
        
        }

    const cancelBooking = async (req,res)=>{
        try {
           const {id} = req.params
            const booking = await Booking.findOneAndDelete({
                _id:id
            })
    
            if(!booking) return sendError(res,400,{message:"error deleting booking"})
            sendData(res,200,{message:"booking deleted successfully"})
        } catch (error) {
            console.log(error)
            sendCustomError(res,500)
            
        }
        
        }

        const editBooking =  async (req,res) =>{
            try{
const {id} =  req.params
const booking = await Booking.findOneAndUpdate({_id:id},{...req.body})

if(!booking) return sendError(res,400,{message:"error updating booking"})

sendData(res,200,{message:"booking updated successfully"})
            }

            catch(error){
sendCustomError(res,error)
            }
        }





module.exports =  {
    createBooking,
    getAllBookings,
    cancelBooking,
    getSingleBooking,
    editBooking
}