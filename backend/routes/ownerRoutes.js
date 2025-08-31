import express from "express"


import upload from "../middleware/multer.js"
// import { protect } from "../middleware/auth.js"
import { addCar, listCars } from "../controllers/carController.js"

const ownerRouter = express.Router()


ownerRouter.post('/add-car',upload.fields([{ name: 'image', maxCount: 1 },     { name: 'comfort', maxCount: 1 }]),addCar)
ownerRouter.get('/list',listCars)





export default ownerRouter