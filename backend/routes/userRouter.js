import express from "express"
import { getUserData, loginUser, registerUser } from "../controllers/userController.js"
import { protect } from "../middleware/auth.js"

const UserRouter = express.Router()


UserRouter.post('/register',registerUser)
UserRouter.post('/login',loginUser)
UserRouter.get('/data',protect,getUserData)



export default UserRouter
