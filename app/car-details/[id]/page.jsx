"use client";
import { useState, useEffect } from "react";

const carDetails = ({ id }) => {
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const response = await axios.get(
          `https://localhost:3000/api/car/${id}`
        ); // Replace with your API endpoint
        setCarData(response.data);
        console.log("car data fetched successfully");
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchCar();
  }, []);

  return <div>carDetails</div>;
};

export default carDetails;
