const mongoose = require('mongoose')

const ticketSchmea = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref: 'User'
    },
    product:{
        type:String,
        required:[true,'please select product'],
        enum :['iphone', 'ipad', 'imac', 'macbook']
    },
    description:{
        type:String,
        required:[true,'please enter a description first']
    },
    status:{
        type:String,
        required:true,
        enum :['new', 'open','closed'],
        default:'new'
    }
},{
    timestamps:true
})

module.exports = mongoose.model("Ticket", ticketSchmea)