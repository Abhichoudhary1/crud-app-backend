const mongoose = require('mongoose')

const connectdb = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`db connect successfull : ${conn.connection.host}`)
    } catch (error) {
        console.log(`db connection failed : ${error.message}`)
    }
}

module.exports = connectdb