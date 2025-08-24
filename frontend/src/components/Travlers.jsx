import { useContext } from "react";
import { TravelContext } from "../context/TravelContext";

const Travelers = () => {
  const { Travels, currency } = useContext(TravelContext);

  return (
    <>
    <div className="my-4">
  
    <p className="text-gray-400">Showing 124 Results</p>
    <hr className="border-r" />
</div>
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 ">
      {Travels.map((item, index) => (
        <div
          key={index}
          className="border border-none rounded-lg overflow-hidden shadow-lg mb-6 bg-white"
        >
          {/* Image */}
          <div className="relative w-full overflow-hidden rounded-xl">
            <img
              src={item.img}
              alt=""
              className="w-full h-auto transform transition-transform duration-500 ease-in-out hover:scale-105"
            />


            {/* <div className="absolute bottom-0 left-0 bg-black/50 text-white w-full pl-2">
              <h3 className="font-semibold text-lg">{item.Name}</h3>
              <p className="text-sm pb-2">{item.fuel}</p>
            </div>  */}
          </div>

          {/* Card content */}
          <div className="p-3">
            {/* Seats and price row */}
            <div className="flex justify-between items-center text-sm text-gray-700">
              <span className="flex gap-2 items-center">
                <img src={item.comfort} alt="comfort" className="w-4 h-4" />
                {item.seats}
              </span>
              <span>
                {currency}
                {item.price}/day
              </span>
            </div>
          </div>
        </div>
      ))}
    </div></>
  );
};

export default Travelers;
