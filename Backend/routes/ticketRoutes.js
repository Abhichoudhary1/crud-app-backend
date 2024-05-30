const express = require('express')
const { protect } = require('../middleware/authMiddlware')
const { createTicket, getTickets, getTicket, deleteTicket, updateTicket } = require('../controller/ticketController')

const router = express.Router()
router.route('/').post(protect, createTicket).get(protect, getTickets)
router.route('/:id').get(protect, getTicket).delete(protect, deleteTicket).put(protect, updateTicket)
router.use('/:ticketId/note', require("./noteRoute"))
module.exports = router