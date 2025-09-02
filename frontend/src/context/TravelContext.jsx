import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const TravelContext = createContext();

const TravelContextProvider = (props) => {
  const currency = "$";
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [products, setProducts] = useState([]);
  const [token,setToken] = useState(localStorage.getItem("token"))

  // Fetch cars
  const getCarsData = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/car/list`);
      if (response.data.success) {
        setProducts(response.data.cars);
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.log("Error fetching cars:", error.message);
    }
  };

  
  // Load cars on mount
  useEffect(() => {
    getCarsData();
  }, []);




  const value = {
    currency,
    products,
    setProducts,token,setToken,backendUrl
  };

  return (
    <TravelContext.Provider value={value}>
      {props.children}
    </TravelContext.Provider>
  );
};

export default TravelContextProvider;
