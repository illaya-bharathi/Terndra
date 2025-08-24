import { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { TravelContext } from "../context/TravelContext";

import TravelsItem from "./TravelsItem";


const Filter = () => {
  const [openVehicle, setOpenVehicle] = useState(false);
  const [openSeat, setOpenSeat] = useState(false);
  const [openFeatures, setOpenFeatures] = useState(false);
  const [filterTravels, setFilterTravels] = useState([])
  const [Category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [price, setPrice] = useState(3600);
  const { currency, Travels } = useContext(TravelContext)

  const toggleCategory = (e) => {
    if (Category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))

    } else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {

    let productsCopy = Travels.slice()

    if (Category.length > 0) {
      productsCopy = productsCopy.filter(item => Category.includes(item.Category))
    }


  }

  useEffect(() => {
    setFilterTravels(Travels)
  })

  useEffect(() => {
    applyFilter()
  }, [Category, subCategory])



  return (
    // Filter Sidebar 
    <div className="grid grid-cols-1 lg:grid-cols-4 w-full gap-4">
      {/* Left side - Filter */}
      <div className="w-full xl:w-72 
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
              <p className="flex gap-2">
                <input type="checkbox" className="w-3" value="Sedan" onChange={toggleCategory} />Sedan
              </p>
              <p className="flex gap-2">
                <input type="checkbox" className="w-3" value="SUV" onChange={toggleCategory} />SUV
              </p>
              <p className="flex gap-2">
                <input type="checkbox" className="w-3" value="Mini Van" onChange={toggleCategory} />Mini Van
              </p>
              <p className="flex gap-2">
                <input type="checkbox" className="w-3" value="Traveller" onChange={toggleCategory} />Traveller
              </p>
              <p className="flex gap-2">
                <input type="checkbox" className="w-3" value="Tourist Bus" onChange={toggleCategory} />Tourist Bus
              </p>
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
              <p className="flex gap-2">
                <input type="checkbox" className="w-3" value="4" onChange={toggleSubCategory} />4
              </p>
              <p className="flex gap-2">
                <input type="checkbox" className="w-3" value="6" onChange={toggleSubCategory} />6
              </p>
              <p className="flex gap-2">
                <input type="checkbox" className="w-3" value="8" onChange={toggleSubCategory} />8
              </p>
              <p className="flex gap-2">
                <input type="checkbox" className="w-3" value="12" onChange={toggleSubCategory} />12
              </p>
              <p className="flex gap-2">
                <input type="checkbox" className="w-3" value="20" onChange={toggleSubCategory} />20
              </p>
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
              <p className="flex gap-2">
                <input type="checkbox" className="w-3" value="WiFi" onChange={toggleCategory} />WiFi
              </p>
              <p className="flex gap-2">
                <input type="checkbox" className="w-3" value="Music System" onChange={toggleCategory} />Music System
              </p>
              <p className="flex gap-2">
                <input type="checkbox" className="w-3" value="Recliner Seats" onChange={toggleCategory} />Recliner Seats
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Right side - List / Travelers */}
      <div className="lg:col-span-3">

         <div className="my-4">
    <p className="text-gray-400">Showing 124 Results</p>
    <hr className="border-r" />
  </div>

  {/* Grid for cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
    {filterTravels.map((item, index) => (
      <TravelsItem
        key={index}
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
