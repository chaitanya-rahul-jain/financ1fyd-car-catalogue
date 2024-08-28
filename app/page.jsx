import RedirectCardSec2 from "@/components/section 2/RedirectCardSec2";
import { FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <div className="h-[44rem] overflow-hidden relative">
        <h2 className="absolute text-center text-white text-4xl font-semibold w-full top-10">
          Welcome to FINANC1FYD
        </h2>
        <p className="absolute  text-center text-white text-1xl font-medium w-full top-24">
          LOOKING FOR A CAR? EXPERIENCE THE EXCEPTIONAL AT FINANC1FYD
        </p>
        <video src="/main-car-vid.mp4" autoPlay loop muted playsInline></video>
      </div>

      <div className="flex justify-center gap-12 py-10 px-10">
        <RedirectCardSec2
          imgUrl="/section-2-1.jpg"
          heading="View Inventory"
          buttonText="VIEW INVENTORY"
          linkTo="/inventory"
        />
        <RedirectCardSec2
          imgUrl="/section-2-2.jpg"
          heading="Know About Us"
          buttonText="ABOUT US"
          linkTo="/about"
        />
      </div>

      {/* <div className="bg-black ">
        <h3 className="text-white text-3xl font-extrabold text-center py-10">
          FIND YOUR DREAM VEHICLE
        </h3>
        <div></div>
      </div>

      <div className="py-10">
        <h3 className="text-center text-3xl font-bold">SEARCH BY BODY STYLE</h3>
        <div></div>
      </div> */}

      <div className="py-16 bg-gray-500">
        <h3 className="text-center text-3xl font-bold">SQUAD SOCIALS</h3>
        <div className="pt-14 pb-5 grid grid-cols-4 gap-4 px-28">
          <div className="bg-[url('/social-squad/social-squad-1.jpg')] bg-cover bg-center aspect-square"></div>
          <div className="bg-[url('/social-squad/social-squad-1.jpg')] bg-cover bg-center aspect-square"></div>
          <div className="bg-[url('/social-squad/social-squad-1.jpg')] bg-cover bg-center aspect-square"></div>
          <div className="bg-[url('/social-squad/social-squad-1.jpg')] bg-cover bg-center aspect-square"></div>
          <div className="bg-[url('/social-squad/social-squad-1.jpg')] bg-cover bg-center aspect-square"></div>
          <div className="bg-[url('/social-squad/social-squad-1.jpg')] bg-cover bg-center aspect-square"></div>
          <div className="bg-[url('/social-squad/social-squad-1.jpg')] bg-cover bg-center aspect-square"></div>
          <div className="bg-[url('/social-squad/social-squad-1.jpg')] bg-cover bg-center aspect-square"></div>
        </div>
        <div className="flex justify-center">
          <button className="flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-600 duration-300 text-white py-2 px-2 rounded">
            <FaInstagram /> Follow on Instagram
          </button>
        </div>
      </div>

      <div className="bg-black flex flex-col items-center justify-center py-10 gap-8">
        <h3 className="text-white text-3xl font-bold text-center">
          COME VISIT US TODAY AND DRIVE HOME IN YOUR DREAM CAR
        </h3>
        <button className="bg-red-500 hover:bg-red-700 duration-300 text-white py-3 px-4 rounded">
          SCHEDULE A TEST DRIVE
        </button>
      </div>

      {/* <div>
        <h3 className="text-center text-3xl font-bold">CUSTOMER REVIEWS</h3>
        <div></div>
      </div> */}

      <div>
        <img src="/autotrader.png" className="w-full"></img>
        <div className="flex gap-5 justify-center bg-red-600 py-5">
          <div className="font-semibold text-white text-2xl text-center">
            2206 Dundas St. E., Mississauga, ON L4X 1L9
          </div>
          <div className="font-semibold text-white text-2xl text-center">|</div>
          <div className="font-semibold text-white text-2xl text-center">
            357 Guelph St., Georgetown, ON L7G 4B6
          </div>
        </div>
      </div>
    </main>
  );
}
