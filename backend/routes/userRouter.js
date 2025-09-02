import express from "express"
import { adminLogin , loginUser, registerUser } from "../controllers/userController.js"
import adminauth from "../middleware/adminauth.js"


const UserRouter = express.Router()


UserRouter.post('/register',registerUser)
UserRouter.post('/login',loginUser)
UserRouter.post('/admin',adminLogin)









export default UserRouter
