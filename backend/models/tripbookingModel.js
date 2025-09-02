import mongoose from "mongoose";

const tripbookingSchema = new mongoose.Schema(
  {
    destination: { type: String, required: true },
    pickuppoint: { type: String, required: true }, 
    droppoint: { type: String, required: true },
    tripbookingtype: { type: String, enum: ["single", "round"], required: true },
    passangercount: { type: Number, required: true },
    tripDates: {
      startDate: { type: String, required: true },
      startTime: { type: String },
      endDate: { type: String,required: true}, 
      endTime: { type: String},
    },
  },
  { timestamps: true }
);


const Booking = mongoose.model("Booking", tripbookingSchema);

export default Booking;
