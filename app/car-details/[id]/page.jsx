"use client";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const CarDetails = ({ params }) => {
  const { id } = params;

  const [carData, setCarData] = useState({});

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

  return (
    <div>
      <div className="grid grid-rows-2 grid-cols-4 gap-2 px-2">
        <div
          className="col-span-2 row-span-2 bg-cover bg-center h-96"
          style={{ backgroundImage: `url(${carData.imageUrl})` }}
        ></div>
        {carData.secondaryImages &&
          carData.secondaryImages.map((image, index) => (
            <div
              key={index}
              className="bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}
      </div>
      <div className="flex justify-stretch px-10">
        <div>
          <div className="text-3xl font-bold pt-5 pb-12">{carData.name}</div>
          <div>
            <div className="text-xl font-semibold">About This Vehicle</div>
            <div></div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CarDetails;
