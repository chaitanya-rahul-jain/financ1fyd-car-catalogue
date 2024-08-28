import CarListDisplay from "@/components/inventory/CarListDisplay";
import FilterForm from "@/components/inventory/FilterForm";

const Inventory = () => {
  return (
    <>
      <div>
        <img src="/inventory/inventory_banner.jpg" />
      </div>
      <div className="bg-black">
        <div>
          <FilterForm></FilterForm>
        </div>
        <CarListDisplay />
      </div>
    </>
  );
};

export default Inventory;
