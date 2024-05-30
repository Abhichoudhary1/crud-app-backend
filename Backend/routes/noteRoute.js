const express = require('express')
const { getNotes, addNotes } = require('../controller/noteController')
const { protect } = require('../middleware/authMiddlware')
const router = express.Router({mergeParams:true})

router.route("/").get(protect, getNotes).post(protect, addNotes)

module.exports = router