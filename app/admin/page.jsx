import CarListDisplay from "@/components/inventory/CarListDisplay";

const Admin = () => {
  return (
    <div className="bg-black">
      <CarListDisplay delete={true} />
    </div>
  );
};

export default Admin;
