import Car from "../models/Car.js"
import userModel from "../models/userModel.js"
import {v2 as cloudinary} from "cloudinary"






export const changeRoleToOwner = async ( req,res) =>{

    try {
        const {_id} = req.user
        await userModel.findByIdAndUpdate(_id,{role:"owner"})
        res.json({success:true,message:"Now you can list cars"})
    } catch (error) {
        console.log(error.message);
        res.json({success:false,message:error.message})

        
    }

}


// Api to List Car


export const addCar =  async (req,res)=>{
     try {
        const {_id} = req.user;
        let car = JSON.parse(req.body.carData)
        const imageFile = req.file;

        if(!imageFile){
            return res.json({success:false,message:"Image is required"})
        }

        // Upload image to cloudinary

        const result = await cloudinary.uploader.upload(imageFile.path,{
            folder:"car_images",
        })
// save to Db
          const newCar = await Car.create({
      owner: _id,
      brand: car.brand,
      name: car.name,
      fuel_type: car.fuel_type,
      comfort: car.comfort,
      category: car.category,
      seating_capacity: car.seating_capacity,
      facility: car.facility,
      image: result.secure_url,   // Cloudinary URL save pannuren
      seats: car.seats,
      rating: car.rating,
      price: car.price,
      location: car.location,
    });

    res.json({success:true,Car:newCar})
        

     } catch (error) {
          console.log(error.message);
        res.json({success:false,message:error.message})
     }
}


