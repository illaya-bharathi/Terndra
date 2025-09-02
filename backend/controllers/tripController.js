import Booking from "../models/tripbookingModel.js"


export const tripBooking = async (req, res) => {
  try {
    console.log("Booking request body:", req.body);

    const { destination, tripDates, pickuppoint, droppoint, tripbookingtype, passangercount } = req.body;

    // Check required values
    if (!destination || !pickuppoint || !droppoint || !tripbookingtype || !passangercount || !tripDates?.startDate || !tripDates?.endDate) {
      return res.json({ success: false, message: "Missing required fields" });
    }

    const bookingTravles = await Booking.create({
      destination,
      tripDates,
      pickuppoint,
      droppoint,
      tripbookingtype,
      passangercount
    });

    res.json({ success: true, trip: bookingTravles });
  } catch (error) {
    console.log("Booking error:", error.message);
    res.json({ success: false, message: error.message });
  }
};


export const updateBooking = async (req, res) => {
    try {
        const { id } = req.params
        const { destination, tripDates, } = req.body

        const updatedBooking = await Booking.findByIdAndUpdate(
            id,
            {
                destination,
                tripDates,
                
            },
            { new: true }
        )
        if (!updatedBooking) {
            res.json({ success: false, message: "Booking not Found"})
        }
        res.json({ success: true, trip: updatedBooking })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })

    }
} 

export const getbooking = async (req, res) => {
  try {
    const { id } = req.params; 

    const bookingcar = await Booking.findById(id);

    if (!bookingcar) {
      return res.json({ success: false, message: "Booking not found" });
    }

    res.json({ success: true, bookingcar });
  } catch (error) {
    console.log("Get booking error:", error.message);
    res.json({ success: false, message: error.message });
  }
};
