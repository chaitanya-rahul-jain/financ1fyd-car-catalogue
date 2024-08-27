import Link from "next/link";

const CarInventoryCard = ({ data }) => {
  return (
    <div className="bg-white">
      <div
        className="h-60 bg-cover bg-center"
        style={{ backgroundImage: `url(${data.imageUrl})` }}
      ></div>
      <div className="px-4">
        <h3 className="text-xl font-bold my-2">{data.name}</h3>
        <div>
          <div className="flex justify-between ">
            <div className="text-sm text-gray-800">Engine:</div>
            <div className="text-sm font-bold">{data.engine}</div>
          </div>
          <div className="flex justify-between">
            <div className="text-sm text-gray-800">Drivetrain:</div>
            <div className="text-sm font-bold">{data.drivetrain}</div>
          </div>
          <div className="flex justify-between">
            <div className="text-sm text-gray-800">Exterior:</div>
            <div className="text-sm font-bold">{data.exterior}</div>
          </div>
          <div className="flex justify-between">
            <div className="text-sm text-gray-800">Interior:</div>
            <div className="text-sm font-bold">{data.interior}</div>
          </div>
          <div className="flex justify-between">
            <div className="text-sm text-gray-800">Odometor:</div>
            <div className="text-sm font-bold">{data.odometer}</div>
          </div>
        </div>
        <div>
          <div className="flex justify-between pt-2">
            <div className="text-xs text-gray-800 font-bold">CASH PRICE:</div>
            <div className="font-bold line-through">${data.cashPrice}</div>
          </div>
          <div className="flex justify-between pt-1">
            <div className="text-xs text-gray-800 font-bold pb-10">
              FINANCE PRICE:
            </div>
            <div className=" font-bold text-green-500">
              ${data.financePrice}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Link href={`/car-details/${data.id}`}>
          <button className="flex items-center justify-center w-11/12 mt-[10px] mb-[10px]  bg-red-500 hover:bg-red-700 duration-300 text-xs font-semibold text-white rounded py-2">
            VIEW DETAILS
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CarInventoryCard;
