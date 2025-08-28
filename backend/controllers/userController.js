import userModel from "../models/userModels.js";
import bycrpt from "bcrypt"
import jwt from "jsonwebtoken"

const createToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET)
}


const registerUser = async(req,res)=>{
    try {
        const {name,email,password,} = req.body

        const exits = await userModel.findOne({email})

        if(exits) { 
            return res.json({suceess:false,message:"User already exits"})
        }

        // validating email format & strong password4

        if(!name || !email || !password){
        return res.json({suceess:false,message:'Fill all the fileds'})

        }
        
        if(password.length < 8) {
            return res.json({success:false,message:'Please enter a valid email'})
        }

        const salt = await bycrpt.genSalt(10)
        const hasedPassword = await bycrpt.hash(password,salt)

        const newUser = new userModel({
            name,
            email,
            password:hasedPassword
        })

        const user = await newUser.save()

        const token = createToken(user._id.toString())

        res.json({suceess:true,token})
    } catch (error) {
        console.log(err)
          res.json({success:false,message:err.message})
    }
}

const loginUser = async(req,res)=>{
    try {
        const {email,password} = req.body;

        const user = await userModel.findOne({email})

        if(!user){
            return res.json({suscess:false,message:'User already exists'})
        }

        const isMatch = await bycrpt.compare(password,user.password)

        if (isMatch) {
            const token = createToken(user.id.toString())
            res.json({success:true,token})
        }else{
            res.json({success:false,message:'Inavlid credentails'}) 
        }
    } catch (error) {
         console.log(error)
     res.json({success:false,message:error.message})
    }
}






export {loginUser,registerUser}