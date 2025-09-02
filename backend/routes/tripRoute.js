import express from "express"

import {  getbooking, tripBooking, updateBooking } from "../controllers/tripController.js"
import { protect } from "../middleware/auth.js"

const tripRoutes = express.Router()

tripRoutes.post('/booking',protect,tripBooking)
tripRoutes.put('/book/:id',protect,updateBooking)
tripRoutes.get('/getbooking/:id',getbooking)




export default tripRoutes

