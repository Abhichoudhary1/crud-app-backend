const asyncHandler = require('express-async-handler')
const User = require("../models/userModel")
const Ticket = require("../models/ticketModel")
const Note = require("../models/notesModel")
const getNotes = asyncHandler(async(req,res)=>{
    
    const user = await User.findById(req.user._id)
    if(!user){
       res.status(401)
       throw new Error("User not found")
    }
 
    const ticket = await Ticket.findById(req.params.ticketId);
    if(!ticket){
       res.status(404);
       throw new Error("Ticket not Found");
    }
    if(ticket.user.toString() !== req.user._id.toString()){
       res.status(401);
       throw new Error("Not Authorised")
    }
   
    const notes = await Note.find({ticket: req.params.ticketId})

    res.status(200).json(notes)
    
})

const addNotes = asyncHandler(async(req,res)=>{
    const user = await User.findById(req.user._id)
    if(!user){
       res.status(401)
       throw new Error("User not found")
    }
 
    const ticket = await Ticket.findById(req.params.ticketId);
    if(!ticket){
       res.status(404);
       throw new Error("Ticket not Found");
    }
    if(ticket.user.toString() !== req.user._id.toString()){
       res.status(401);
       throw new Error("Not Authorised")
    }

    const note = await Note.create({
        text:req.body.text,
        isStaff:false,
        ticket:req.params.ticketId,
        user:req.user._id
    })
    res.status(200).json(note)
})

module.exports ={getNotes, addNotes}
