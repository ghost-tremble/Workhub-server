//  Routes regarding managing workspaces

const Workspace = require("../../Model/Workspace")
const { sendCustomError, sendError, sendData } = require("../../utils/responseHelpers")


const createWorkspaceListing = async (req,res)=>{
try {
    const {name,type,postCode,address,description} = req.body
    const {id} =  req.user
    const workspaceListing = await Workspace.create({
        name,type,postCode,address,description,user:id
    })

    if(!workspaceListing) return sendError(res,400,{message:"couldn't create workspace"})
    
    sendData(res,200,{message:"workspace created successfully",data:workspaceListing})
} catch (error) {
    console.log(error)
    sendCustomError(res,500)
    
}

}


const getAllUserWorksSpaces = async (req,res)=>{
    try {
        const {id} =  req.user
        const workspaces = await Workspace.find({
            user:id
        })
    
        if(!workspaces) return sendError(res,400,{message:"error fetching workspace"})
        sendData(res,200,{message:"success",data:workspaces})
    } catch (error) {
        console.log(error)
        sendCustomError(res,500)
        
    }
    
    }

    const getAllUserSingleWorksSpace = async (req,res)=>{
        try {
            const {id} =  req.user
            const workspaces = await Workspace.findOne({
                user:id,
                _id:req.params.id
            })
        
            if(!workspaces) return sendError(res,400,{message:"error fetching workspace"})
            sendData(res,200,{message:"success",data:workspaces})
        } catch (error) {
            console.log(error)
            sendCustomError(res,500)
            
        }
        
        }



    const getWorkspaces = async (req,res)=>{
        try {

            const  {query} =  req.query
            const regex =  new RegExp(query, 'i');

            const workspaces = await Workspace.find({
                $or:[
                    {name:regex}
                ]
            })
        
            if(!workspaces) return sendError(res,400,{message:"error fetching workspace"})
            sendData(res,200,{message:"success",data:workspaces})
        } catch (error) {
            console.log(error)
            sendCustomError(res,500)
            
        }
        
        }

    const deleteWorkspace = async (req,res)=>{
        try {
           const {id} = req.params
            const workspace = await Workspace.findOneAndDelete({
                _id:id
            })
    
            if(!workspace) return sendError(res,400,{message:"error deleting workspace"})
            sendData(res,200,{message:"workspace deleted successfully"})
        } catch (error) {
            console.log(error)
            sendCustomError(res,500)
            
        }
        
        }

        const editWorkspace =  async (req,res) =>{
            try{
const {id} =  req.params
const workspace = await Workspace.findOneAndUpdate({_id:id},{...req.body})

if(!workspace) return sendError(res,400,{message:"error updating workspace"})

sendData(res,200,{message:"workspace updated successfully"})
            }

            catch(error){
sendCustomError(res,error)
            }
        }




module.exports = {
 createWorkspaceListing,
 getAllUserWorksSpaces,
 deleteWorkspace,
 getWorkspaces,
 getAllUserSingleWorksSpace,
 editWorkspace
}