const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
     name :{
        type:String,
        require:[true, 'please fill the name'],
     },
     email :{
        type:String,
        unique:true,
        require:[true, 'please enter email'],
     },
     password :{
        type:String,
        require:[true, 'enter valid password'],
     },
     isAdmin :{
        type:Boolean,
        require:true,
        default:false,
     },

},
{
    timestamps: true,
})

module.exports = mongoose.model("User", userSchema)