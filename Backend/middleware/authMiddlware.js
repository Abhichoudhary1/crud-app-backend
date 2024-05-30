const jwt = require("jsonwebtoken")
const asynchandler = require("express-async-handler")
const user = require('../models/userModel')

const protect = asynchandler(async (req, res, next) => {
    let token

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(" ")[1]

            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await user.findById(decoded.id).select("-password")
            next()
        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error("not authorized || token invalid")
        }
    } else {
        res.status(401)
        throw new Error("not authorized || no token found")
    }

})

module.exports = { protect }