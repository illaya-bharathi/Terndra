import mongoose from "mongoose";


const carSchema = new mongoose.Schema({
  name: { type: String, required: true },
  fuel_type: { type: String, required: true },
  comfort: { type: String, required: true },
  category: { type: String, required: true },
  seating_capacity: { type: Number, required: true },
  facility: { type: String, required: true },
  image: { type: [String], required: true }, 
  seats: { type: Number, required: true },
  rating: { type: Number, required: true },
  price: { type: Number, required: true },
  location: { type: Number, required: true },
  isAvaliable:{type:Boolean,default:true}

},{
    timestamps:true
});

const car =  mongoose.model('Car', carSchema);

export default car;