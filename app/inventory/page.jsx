import CarListDisplay from "@/components/inventory/CarListDisplay";

const Inventory = () => {
  return (
    <>
      <div>
        <img src="/inventory/inventory_banner.jpg" />
      </div>
      <div className="bg-black">
        <div></div>
        <CarListDisplay />
      </div>
    </>
  );
};

export default Inventory;
