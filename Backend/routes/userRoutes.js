const express = require('express')
const { registeruser, loginuser, getMe } = require('../controller/userController')
const { protect } = require('../middleware/authMiddlware')

const router = express.Router()
// user register
router.post("/", registeruser)
router.post("/login", loginuser)
router.get("/protect", protect, getMe)
module.exports = router