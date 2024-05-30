const mongoose = require('mongoose')

const notesSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'user'
    },
    ticket:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'ticket'
    },
    text:{
        type:String,
        required:[true,'please Add some text']
    },
    isStaff:{
        type:Boolean,
        default:false
    },
    staffID:{
        type:String
    }


},{
    timestamps:true
})

module.exports = mongoose.model("note", notesSchema)