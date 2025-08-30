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


// Api to list Owner Cars

export const getOwnerCars = async (req,res)=>{
    try {
        const {_id} = req.user;
        const cars = await Car.find({owner:_id})
        res.json({success:true,cars})

    } catch (error) {
         console.log(error.message);
        res.json({success:false,message:error.message})
    }
}


// Api to Toggle car availabilty

export const toogleCarAvailability = async (req,res)=>{
    try {
        const {_id} = req.user;
        const {carId} = req.body
        const car = await Car.findById(carId)

        // Checking is car belong to the user
        if (car.owner.toString() !==_id.toString()) {
          return res.json({success:false,message:"Unauthorized"})
          
        }

        car.isAvaliable = !car.isAvaliable

        await car.save()
        res.json({success:true,message:"Availabilty Toggled"})

    } catch (error) {
         console.log(error.message);
        res.json({success:false,message:error.message})
    }
}

// Delete Car

export const deleteCar = async (req,res)=>{
    try {
        const {_id} = req.user;
        const {carId} = req.body
        const car = await Car.findById(carId)

        // Checking is car belong to the user
        if (car.owner.toString() !==_id.toString()) {
          return res.json({success:false,message:"Unauthorized"})
          
        }

        car.owner = null
        car.isAvaliable = false

        await car.save()
        res.json({success:true,message:"Availabilty Toggled"})

    } catch (error) {
         console.log(error.message);
        res.json({success:false,message:error.message})
    }
}

// Api to get dashboard Data

export const getDashboardData = async (req,res)=>{
    try {
        const {_id,role} = req.user

        if(role !=='owner'){
                      return res.json({success:false,message:"Unauthorized"})

        }

        const cars = await Car.find({owner:_id})
    } catch (error) {
         console.log(error.message);
        res.json({success:false,message:error.message})
    }
}