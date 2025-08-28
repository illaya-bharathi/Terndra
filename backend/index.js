import express from "express"
import cors from "cors"
import 'dotenv/config'
import connectDb from "./config/mongodb.js";
import UserRouter from "./routes/userRouter.js";


const app= express()


const port= process.env.PORT || 5000
connectDb()

// Middleware

app.use(express.json())
app.use(cors())

app.use('/api/user',UserRouter)

app.get('/',(req,res)=>{
    res.send('API WORKING')
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
    
})