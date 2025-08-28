import React, { useContext } from 'react';
import { TravelContext } from '../context/TravelContext';

const TravelsItem = ({ name, image, price, fuel, comfort, seats }) => {
  const { currency } = useContext(TravelContext);

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image Section */}
      <div className="relative w-full aspect-w-16 aspect-h-9">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-105"
        />
        {/* Optional Overlay */}
        {/*
        <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent text-white w-full p-3">
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-sm">{fuel}</p>
        </div>
        */}
      </div>

      {/* Details Section */}
      <div className="p-4">
        <div className="flex justify-between items-center text-sm text-gray-700">
          <span className="flex gap-2 items-center">
            <img src={comfort} alt="comfort" className="w-5 h-5" />
            <span>. {seats}</span>
          </span>
          <span className="font-semibold text-gray-900">
            {currency}{price} <span className="text-xs text-gray-500">/day</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TravelsItem;




