import { FaFacebookSquare, FaInstagram, FaTiktok } from "react-icons/fa";
export default function Home() {
  return (
    <main className="">
      <div className="h-8 bg-slate-300">
        <div></div>
        <div className="flex gap-2">
          <FaFacebookSquare />
          <FaInstagram />
          <FaTiktok />
        </div>
      </div>
      <div className="h-24 bg-black"></div>
      <div  className="h-[44rem] overflow-hidden">
        <h2  className="absolute">
          Welcome to FINANC1FYD
        </h2>
        <p  className="absolute">
          Looking for a Car? Experience the exceptional at FINANC1FYD
        </p>
        <video src="/main-car-vid.mp4" autoPlay loop muted playsInline></video>
      </div>
      <div className="bg-red-500 flex justify-around gap-40">
        <div className="bg-[url('/section-2-1.jpg')] bg-cover bg-center h-64 w-[40rem] pl-10">
          <h3 className="text-white text-3xl font-bold  mt-16 mb-5">
            View Inventory
          </h3>
          <button className="bg-red-500 text-white py-5 px-6">
            VIEW INVENTORY
          </button>
        </div>
        <div>
          <h3>View Inventory</h3>
          <button>APPLY NOW</button>
        </div>
      </div>
      <div>
        <h3>FIND YOUR DREAM VEHICLE</h3>
      </div>
      <div>
        <h3>SEARCH BY BODY STYLE</h3>
        <div></div>
      </div>
      <div>
        <h3>SQUAD SOCIALS</h3>
        <div></div>
        <div>
          <button></button>
          <button></button>
        </div>
      </div>
      <div>
        <h3>COME VISIT US TODAY AND DRIVE HOME IN YOUR DREAM CAR</h3>
        <button>SCHEDULE A TEST DRIVE</button>
      </div>
      <div>
        <h3>CUSTOMER REVIEWS</h3>
        <div></div>
      </div>
      <div>
        <img src="/autotrader.png"></img>
        <div>
          2206 Dundas St. E., Mississauga, ON L4X 1L9 | 357 Guelph St.,
          Georgetown, ON L7G 4B6
        </div>
        <div>EXPERIENCE THE EXCEPTIONAL AT CARSQUAD</div>
      </div>
      <div>
        <div></div>
        <div>
          <div>OUR HOURS</div>
          <div>
            <div>
              <div>MONDAY</div>
              <div>9:00 AM to 8:00 PM</div>
            </div>
            <div>
              <div>TUESDAY</div>
              <div>9:00 AM to 8:00 PM</div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </main>
  );
}
