const asyncHandler = require('express-async-handler')
const User = require("../models/userModel")
const Ticket = require("../models/ticketModel")
const getTickets = asyncHandler(async(req,res)=>{
     const user = await User.findById(req.user._id)
     if(!user){
      res.status(401)
      throw new Error("User not found")
     }

     const tickets = await Ticket.find({user: req.user._id})
     res.status(200).json(tickets)
})

const createTicket = asyncHandler(async(req,res)=>{
   const{product, description} = req.body
   if(!product || !description){
      res.status(400)
      throw new Error("please fill all the details")
   }

   const user = await User.findById(req.user._id)
   if(!user){
      res.status(401)
      throw new Error("User not found")
   }

   const ticket = await Ticket.create({
      product,
      description,
      user :req.user._id,
      status:'new'
   })
   res.status(201).json(ticket)
}) 

const getTicket = asyncHandler(async(req,res)=>{
   const user = await User.findById(req.user._id)
   if(!user){
      res.status(401)
      throw new Error("User not found")
   }

   const ticket  = await Ticket.findById(req.params.id)
   if(!ticket){
      res.status(404)
      throw new Error("Ticket not found")
   }

   if(ticket.user.toString() !== req.user._id.toString()){
      res.status(401)
      throw new Error("not authroised")
   }
   res.status(200).json(ticket)
})

const deleteTicket = asyncHandler(async(req,res)=>{
   const user = await User.findById(req.user._id)
   if(!user){
      res.status(401)
      throw new Error("User not found")
   }

   const ticket = await Ticket.findById(req.params.id);
   if(!ticket){
      res.status(404);
      throw new Error("Ticket not Found");
   }
   if(ticket.user.toString() !== req.user._id.toString()){
      res.status(401);
      throw new Error("Not Authorised")
   }
   await Ticket.findByIdAndDelete(req.params.id)
   res.status(200).json({
      success:true,
   })


})

const updateTicket = asyncHandler(async(req,res)=>{
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
   const updateTicket = await Ticket.findByIdAndUpdate(req.params.id, req.body ,{new:true})
   res.status(200).json(updateTicket)
})

module.exports = {getTickets, createTicket, getTicket, deleteTicket, updateTicket}