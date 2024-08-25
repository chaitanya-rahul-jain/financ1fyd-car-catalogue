"use client";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import CarInventoryCard from "./CarInventoryCard";

const CarListDisplay = () => {
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get("https://financ1fyd-car-catalogue.vercel.app/api/cars"); // Replace with your API endpoint
        setCarData(response.data);
        console.log("data fetched successfully");
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchCars();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 px-10 pb-28 pt-10">
        {carData.map((car) => {
          return <CarInventoryCard data={car} key={car.id} />;
        })}
      </div>
    </div>
  );
};

export default CarListDisplay;
