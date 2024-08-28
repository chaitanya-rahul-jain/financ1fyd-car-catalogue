import Link from "next/link";

const RedirectCardSec2 = ({ imgUrl, heading, buttonText, linkTo }) => {
  return (
    <div
      className="bg-[url('/section-2-1.jpg')] bg-cover bg-center h-64 w-[44rem] pl-10"
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      <h3 className="text-white text-3xl font-bold  mt-16 mb-5">{heading}</h3>
      <Link href={linkTo}>
        <button className="bg-red-500 hover:bg-red-700 duration-300 text-white py-5 px-6 rounded">
          {buttonText}
        </button>
      </Link>
    </div>
  );
};

export default RedirectCardSec2;
