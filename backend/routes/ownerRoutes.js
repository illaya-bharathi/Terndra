import express from "express"
import { protect } from "../middleware/auth.js"
import { addCar, changeRoleToOwner, deleteCar, getOwnerCars, toogleCarAvailability } from "../controllers/ownerController.js"
import upload from "../middleware/multer.js"

const ownerRouter = express.Router()

ownerRouter.post('/change-role',protect,changeRoleToOwner)
ownerRouter.post('/add-car',upload.single('image'),protect,addCar)
ownerRouter.get('/car',protect,getOwnerCars)
ownerRouter.post('/toggle-car',protect,toogleCarAvailability)
ownerRouter.post('/delete-car',protect,deleteCar)





export default ownerRouter