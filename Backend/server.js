const express = require("express")
const  connectdb  = require("./config/db_config")
const { errorHandler } = require("./middleware/errorHandler")
require("dotenv").config()
const app = express()
connectdb()

const PORT = process.env.PORT || 5000

// body parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.send( "welcome to blog api 1.0" )
})

app.use("/api/user", require("./routes/userRoutes"))
app.use("/api/ticket", require("./routes/ticketRoutes"))
app.use("/api/admin", require("./routes/adminRoute"))
app.use(errorHandler)
app.listen(PORT, () => {
    console.log(`server is running at port : ${PORT}`)
})

