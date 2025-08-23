import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { TravelContext } from "../context/TravelContext";


const Filter = () => {
  const [openVehicle, setOpenVehicle] = useState(false);
  const [openSeat, setOpenSeat] = useState(false);
  const [openFeatures, setOpenFeatures] = useState(false);
    const [price, setPrice] = useState(3600);
    const {currency} = useContext(TravelContext)

  return (
    // Filter Sidebar 
   <div className="w-full xl:w-72 
                border-b lg:border-b-0 lg:border-r border-gray-200 
                px-4 py-4 md:py-6  lg:overflow-y-scroll lg:h-screen scrollbar">

  {/* Header */}
  <div className="flex justify-between">
    <div className="flex gap-2 items-center mb-6">
      <img src={assets.filter} alt="filter icon" className="w-5 h-5" />
      <h2 className="text-lg md:text-xl font-semibold">Filters</h2>
    </div>
  </div>

  {/* Price */}
  <div className="py-4">
    <div className="flex justify-between items-center">
      <h2 className="pb-4 text-sm md:text-base">Price Range</h2>
      <span className="text-sm font-medium">{currency}{price}</span>
    </div>
    <input
      type="range"
      min="0"
      max="5000"
      defaultValue="3600"
      className="w-full range-slider"
      onChange={(e) => setPrice(e.target.value)}
    />
  </div>

  <hr className="border-b w-full" />

  {/* Vehicle Type */}
  <div className="py-4 relative">
    <h2
      onClick={() => setOpenVehicle(!openVehicle)}
      className="flex items-center justify-between cursor-pointer text-sm md:text-base"
    >
      Vehicle Type
      <img
        src={openVehicle ? assets.arrowup : assets.arrowdown}
        alt=""
        className="w-6 h-3"
      />
    </h2>

    {openVehicle && (
      <div className="flex flex-col gap-2 mt-3">
        {["Sedan", "SUV", "Mini Van", "Traveller", "Tourist Bus"].map(
          (type) => (
            <label
              key={type}
              className="flex items-center gap-2 cursor-pointer text-sm md:text-base"
            >
              <input type="checkbox" className="w-4 h-4" />
              <span>{type}</span>
            </label>
          )
        )}
      </div>
    )}
  </div>

  <hr className="border-b w-full" />

  {/* Seat Capacity */}
  <div className="py-4 relative">
    <h2
      onClick={() => setOpenSeat(!openSeat)}
      className="flex items-center justify-between cursor-pointer text-sm md:text-base"
    >
      Seat Capacity
      <img
        src={openSeat ? assets.arrowup : assets.arrowdown}
        alt=""
        className="w-6 h-3"
      />
    </h2>
    {openSeat && (
      <div className="flex flex-col gap-2 mt-3">
        {[4, 6, 8, 12, 20].map((seat) => (
          <label
            key={seat}
            className="flex items-center gap-2 cursor-pointer text-sm md:text-base"
          >
            <input type="checkbox" className="w-4 h-4" />
            <span>{seat} Seats</span>
          </label>
        ))}
      </div>
    )}
  </div>

  <hr className="border-b w-full" />

  {/* Features */}
  <div className="py-4 relative">
    <h2
      onClick={() => setOpenFeatures(!openFeatures)}
      className="flex items-center justify-between cursor-pointer text-sm md:text-base"
    >
      Features
      <img
        src={openFeatures ? assets.arrowup : assets.arrowdown}
        alt=""
        className="w-6 h-3"
      />
    </h2>

    {openFeatures && (
      <div className="flex flex-col gap-2 mt-3">
        {["AC", "WiFi", "Music System", "Recliner Seats"].map((feature) => (
          <label
            key={feature}
            className="flex items-center gap-2 cursor-pointer text-sm md:text-base"
          >
            <input type="checkbox" className="w-4 h-4" />
            <span>{feature}</span>
          </label>
        ))}
      </div>
    )}
  </div>
</div>

  );
};

export default Filter;
