import Car from "../models/Car.js"
import { v2 as cloudinary } from "cloudinary"









// Api to List Car

export const addCar = async (req, res) => {
  try {
    const { brand, name, fuel_type, category, seating_capacity, facility, seats, rating, price, location } = req.body;

    const imageFile = req.files?.image?.[0];
    const comfortFile = req.files?.comfort?.[0];

    if (!imageFile) {
      return res.json({ success: false, message: "car image  are required" });
    }
      if (!comfortFile) {
      return res.json({ success: false, message: " comfort image are required" });
    }


    // Upload images to Cloudinary
    const imageResult = await cloudinary.uploader.upload(imageFile.path, { folder: "car_images" });
    const comfortResult = await cloudinary.uploader.upload(comfortFile.path, { folder: "car_comfort" });

    const newCar = await Car.create({
      brand,
      name,
      fuel_type,
      category,
      seating_capacity,
      facility,
      seats,
      rating,
      price,
      location,
      image: imageResult.secure_url,         // car image
      comfort: comfortResult.secure_url      // comfort image
    });

    res.json({ success: true, Car: newCar });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};




// list the cars

export const listCars = async (req,res) =>{
    try {
        const cars = await Car.find({})
        res.json({success:true,cars})
    } catch (error) {
        console.log(error.message);
    res.json({ success: false, message: error.message });
    }
}


// remove cars

export const removeCars = async () =>{
   try {
    await Car.findByIdAndDelete(req.body.id)
      res.json({success:true,message:"product Deleted"})
   } catch (error) {
     console.log(error.message);
    res.json({ success: false, message: error.message });
   }
}






