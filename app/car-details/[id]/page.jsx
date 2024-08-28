"use client";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const CarDetails = ({ params }) => {
  const { id } = params;

  const [carData, setCarData] = useState([]);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_ROOT_URL}/api/cars/${id}`
        );
        setCarData(response.data);
        console.log("data fetched successfully");
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchCar();
  }, []);

  console.log(carData);

  return <div>hello world</div>;
};

export default CarDetails;
