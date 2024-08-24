import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div className="flex justify-center items-center gap-2 p-5">
        <img src="/main-logo.jpeg" alt="logo" className="h-20 w-20" />
        <div>
          <h1 className="text-3xl font-bold">FINANC1FYD</h1>
          <p className="text-1xl font-medium">Financing for your dream car</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-5 mr-8">
        <Link href="/">
          <div className="font-bold hover:text-red-600 duration-150 hover:cursor-pointer">
            HOME
          </div>
        </Link>
        <Link href="/inventory">
          <div className="font-bold hover:text-red-600 duration-150 hover:cursor-pointer">
            INVENTORY
          </div>
        </Link>
        <Link href="/about-us">
          <div className="font-bold hover:text-red-600 duration-150 hover:cursor-pointer">
            ABOUT US
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
