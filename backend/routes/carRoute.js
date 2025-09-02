import express from "express"


import upload from "../middleware/multer.js"
// import { protect } from "../middleware/auth.js"
import { addCar, listCars, removeCars } from "../controllers/carController.js"

const CarRouter = express.Router()


CarRouter.post('/add-car',upload.fields([{ name: 'image', maxCount: 1 },     { name: 'comfort', maxCount: 1 }]),addCar)
CarRouter.get('/list',listCars)
CarRouter.get('/remove',removeCars)






export default CarRouter