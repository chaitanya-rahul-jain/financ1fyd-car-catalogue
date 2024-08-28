"use client";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import CarInventoryCard from "./CarInventoryCard";

const CarListDisplay = ({ filters }) => {
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_ROOT_URL}/api/cars`
        ); // Replace with your API endpoint
        setCarData(response.data);
        console.log("data fetched successfully");
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchCars();
  }, []);

  const filteredCars = carData.filter((car) => {
    return (
      (filters.year.length === 0 ||
        filters.year.includes(car.year.toString())) &&
      (filters.make.length === 0 ||
        filters.make.includes(car.make.toString())) &&
      (filters.exteriorColor.length === 0 ||
        filters.exteriorColor.includes(car.exterior.toString())) &&
      (filters.interiorColor.length === 0 ||
        filters.interiorColor.includes(car.interior.toString()))
    );
  });

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 px-10 pb-28 pt-10">
        {filteredCars.map((car) => {
          return <CarInventoryCard data={car} key={car.id} />;
        })}
      </div>
    </div>
  );
};

export default CarListDisplay;
