'use client'
import CarInventoryCard from "@/components/inventory/CarInventoryCard";
import React from "react";

const Inventory = () => {
  return (
    <>
      <div>
        <img src="/inventory/inventory_banner.jpg" />
      </div>
      <div>
        <div></div>
        <div className="grid grid-cols-3 gap-4">
          <CarInventoryCard/>
        </div>
      </div>
    </>
  );
};

export default Inventory;
