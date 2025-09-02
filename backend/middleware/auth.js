import jwt from "jsonwebtoken"
import userModel from "../models/userModel.js";


export const protect = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.json({ success: false, message: "Not auhtorized Login Again" })
    }

    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET)

        if (!token_decode) {
            return res.json({ success: false, message: "Not auhtorized Login Again" })

        }

        req.user = await userModel.findById(token_decode.id)

        if (!req.user) {
            return res.json({ success: false, message: "User not found Please login again " })
        }
        next()
    } catch (error) {
        console.log(error.message)
        return res.json({ success: false, message: "not auhtorized" })

    }
}



