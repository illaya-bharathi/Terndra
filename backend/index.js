import express from "express"
import cors from "cors"
import 'dotenv/config'
import connectDb from "./config/mongodb.js";
import UserRouter from "./routes/userRouter.js";
import ownerRouter from "./routes/ownerRoutes.js";
import connectCloudinary from "./config/cloudinary.js";




const app= express()


const port= process.env.PORT || 5000
connectDb()
connectCloudinary();

// Middleware

app.use(express.json())
app.use(cors())

// Routes

app.use('/api/user',UserRouter)
app.use('/api/owner',ownerRouter)

app.get('/',(req,res)=>{
    res.send('API WORKING')
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
    
})