import { useContext, useEffect, useState } from "react";


import TravelsItem from "../components/TravelsItem"
import { TravelContext } from "../context/TravelContext";
import { assets } from "../assets/assets";


const Filter = () => {
  const [openVehicle, setOpenVehicle] = useState(false);
  const [openSeat, setOpenSeat] = useState(false);
  const [openFeatures, setOpenFeatures] = useState(false);
  const [filterTravels, setFilterTravels] = useState([])
  const [category, setCategory] = useState([])
  const [seatCapacity, setSeatCapacity] = useState([])
  const [features,setFeatures]=  useState([])
  const [price, setPrice] = useState(3600);
  const { currency,products,setProducts } = useContext(TravelContext)

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

   const toggleSeatCapacity = (e) => {
    if (seatCapacity.includes(Number(e.target.value))) {
      setSeatCapacity((prev) => prev.filter((item) => item !== Number(e.target.value)));
    } else {
      setSeatCapacity((prev) => [...prev, Number(e.target.value)]);
    }
  };
  const toggleFeatures = (e) => {
    if (features.includes(e.target.value)) {
      setFeatures((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setFeatures((prev) => [...prev, e.target.value]);
    }
  };


 const applyFilter = () => {
    let productsCopy = [...products];

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (seatCapacity.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        seatCapacity.includes(item.seating_capacity)
      );
    }

    if (features.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        features.includes(item.facility)
      );
    }

    // Price filter
    productsCopy = productsCopy.filter((item) => item.price <= price);

    setFilterTravels(productsCopy);
  };

  useEffect(() => {
    setFilterTravels(products);
  }, [products]);

  useEffect(() => {
    applyFilter();
  }, [category, seatCapacity, features, price]);

  useEffect(() => {
    setFilterTravels(products)
  },[])

  useEffect(() => {
    applyFilter()
  }, [category, seatCapacity,features,price])



  return (
    // Filter Sidebar 
    <div className="grid grid-cols-1 lg:grid-cols-4 w-full gap-4">
      {/* Left side - Filter */}
      <div className="w-full xl:w-72  *:
              border-b lg:border-b-0 lg:border-r border-gray-200 
              px-4 py-4 md:py-6 lg:overflow-y-scroll lg:h-screen scrollbar">

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
            onChange={(e) => setPrice (Number(e.target.value))}
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
                  <label key={type} className="flex gap-2">
                    <input
                      type="checkbox"
                      value={type}
                      onChange={toggleCategory}
                    />
                    {type}
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
              {[4, 6, 8, 12, 20].map((num) => (
                <label key={num} className="flex gap-2">
                  <input
                    type="checkbox"
                    value={num}
                    onChange={toggleSeatCapacity}
                  />
                  {num}
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
              {["WiFi", "Music System", "Recliner Seats","AC"].map((feat) => (
                <label key={feat} className="flex gap-2">
                  <input
                    type="checkbox"
                    value={feat}
                    onChange={toggleFeatures}
                  />
                  {feat}
                </label>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Right side - List / Travelers */}
      <div className="lg:col-span-3">

         <div className="my-4">
    <p className="text-gray-400">Showing {filterTravels.length} Results</p>
    <hr className="border-r" />
  </div>

  {/* Grid for cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
    {filterTravels.map((item) => (
      <TravelsItem
        key={item._id}
        image={item.image}
        id={item.id}
        price={item.price}
        comfort={item.comfort}
        seats={item.seats}
      />
    ))}
  </div>
    </div>
    </div>




  );
};

export default Filter;
