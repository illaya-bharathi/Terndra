import React, { useState, useRef, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { assets } from "../assets/assets";
import Filter from "./Filter";

const Destination = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [openStart, setOpenStart] = useState(false);
  const [openEnd, setOpenEnd] = useState(false);

  const startRef = useRef();
  const endRef = useRef();

  // Close calendar if click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        startRef.current && !startRef.current.contains(event.target)
      ) {
        setOpenStart(false);
      }
      if (
        endRef.current && !endRef.current.contains(event.target)
      ) {
        setOpenEnd(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
 
    <div className="flex flex-col lg:flex-row items-center border rounded-xl p-4 gap-4">
      <div className="grid grid-cols-1 lg:grid-cols-4 w-full gap-2">
        {/* Destination */}
        <div className="col-span-1 lg:col-span-2 border-b lg:border-b-0 lg:border-r border-gray-400 pb-3 lg:pb-0 lg:pr-4 justify-center lg:justify-start">
          <h2 className="text-sm text-center lg:text-start text-gray-500 pb-1">
            Destination
          </h2>
          <div className="flex items-center gap-4 justify-center lg:justify-start">
            <img src={assets.location} alt="Location Icon" className="w-5 h-7" />
            <p className="text-base font-medium truncate">Your Destination</p>
          </div>
        </div>

        {/* Start Date */}
        <div ref={startRef} className="col-span-1 border-b lg:border-b-0 lg:border-r border-gray-400 pb-3 lg:pb-0 lg:pr-4">
          <h2 className="text-sm text-center lg:text-start text-gray-500 pb-1">
            Start Date
          </h2>
          <div className="relative flex items-center gap-1 justify-center lg:justify-start">
            <img
              src={assets.calender}
              alt="Calendar Icon"
              className="w-5 h-5 cursor-pointer"
              onClick={() => {
                setOpenStart(!openStart);
                if (!openStart) setOpenEnd(false);
              }}
            />
            <p
              className="text-gray-900 text-sm xl:font-medium cursor-pointer"
              onClick={() => {
                setOpenStart(!openStart);
                if (!openStart) setOpenEnd(false);
              }}
            >
              {startDate ? startDate.toLocaleDateString("en-GB") : "DD-MM-YYYY"}
            </p>

            {openStart && (
              <div className="absolute z-10 mt-10">
                <Calendar
                  onChange={(date) => {
                    setStartDate(date);
                    setOpenStart(false);
                  }}
                  value={startDate || new Date()}
                />
              </div>
            )}
          </div>
        </div>

        {/* End Date */}
        <div ref={endRef} className="col-span-1 pb-3 lg:pb-0 flex justify-center lg:justify-start">
          <div className="w-full">
            <h2 className="text-sm text-gray-500 text-center lg:text-start pb-1">End Date</h2>
            <div className="relative flex items-center gap-2 justify-center lg:justify-start">
              <img
                src={assets.calender}
                alt="Calendar Icon"
                className="w-5 h-5 cursor-pointer"
                onClick={() => {
                  setOpenEnd(!openEnd);
                  if (!openEnd) setOpenStart(false);
                }}
              />
              <p
                className="text-gray-900 text-sm xl:font-medium cursor-pointer"
                onClick={() => {
                  setOpenEnd(!openEnd);
                  if (!openEnd) setOpenStart(false);
                }}
              >
                {endDate ? endDate.toLocaleDateString("en-GB") : "DD-MM-YYYY"}
              </p>

              {openEnd && (
                <div className="absolute z-10 mt-10">
                  <Calendar
                    onChange={(date) => {
                      setEndDate(date);
                      setOpenEnd(false);
                    }}
                    value={endDate || new Date()}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Search Button */}
      <div className="w-full md:w-auto flex justify-center lg:justify-end mt-3 lg:mt-0">
        <button className="flex items-center h-10 bg-[#3F91C1] text-white px-6 rounded-lg hover:bg-[#3379a5] transition">
          Search
        </button>
      </div>
    </div>

      
    </>
  );
};

export default Destination;
