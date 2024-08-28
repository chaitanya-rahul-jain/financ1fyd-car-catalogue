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
      <div className="justify-stretch px-10">
        <div>
          <div className="text-3xl font-bold pt-5 pb-12">{carData.name}</div>
          <div>
            <div className="text-xl font-semibold">About This Vehicle</div>
            <div></div>
          </div>
        </div>
        <div>
          <div className="py-5 w-96">
            {/* <h3 className="text-xl font-bold my-2">{carData.name}</h3> */}
            <div>
              <div className="flex justify-between ">
                <div className="text-sm text-gray-800">Engine:</div>
                <div className="text-sm font-bold">{carData.engine}</div>
              </div>
              <div className="flex justify-between">
                <div className="text-sm text-gray-800">Drivetrain:</div>
                <div className="text-sm font-bold">{carData.drivetrain}</div>
              </div>
              <div className="flex justify-between">
                <div className="text-sm text-gray-800">Exterior:</div>
                <div className="text-sm font-bold">{carData.exterior}</div>
              </div>
              <div className="flex justify-between">
                <div className="text-sm text-gray-800">Interior:</div>
                <div className="text-sm font-bold">{carData.interior}</div>
              </div>
              <div className="flex justify-between">
                <div className="text-sm text-gray-800">Odometor:</div>
                <div className="text-sm font-bold">{carData.odometer}</div>
              </div>
            </div>
            <div>
              <div className="flex justify-between pt-2">
                <div className="text-xs text-gray-800 font-bold">
                  CASH PRICE:
                </div>
                <div className="font-bold line-through">
                  ${carData.cashPrice}
                </div>
              </div>
              <div className="flex justify-between pt-1">
                <div className="text-xs text-gray-800 font-bold pb-10">
                  FINANCE PRICE:
                </div>
                <div className=" font-bold text-green-500">
                  ${carData.financePrice}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
