import { FaPhone } from "react-icons/fa";
import { IoLocationSharp, IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <div className="text-white text-3xl font-semi-bold text-center py-10 bg-gray-700 max-[1000px]:hidden">
        EXPERIENCE THE EXCEPTIONAL AT CARSQUAD
      </div>
      <div className="bg-black px-24 flex justify-between pb-6 max-[1000px]:flex-col max-[1000px]:px-2">
        {/* <div>maps</div> */}
        <div>
          <div className="text-white text-xl font-bold py-8">OUR HOURS</div>
          <div className="text-white flex flex-col gap-3 w-96 max-[800px]:w-72">
            <div className="flex justify-between">
              <div>MONDAY</div>
              <div>9:00 AM to 8:00 PM</div>
            </div>
            <div className="flex justify-between">
              <div>TUESDAY</div>
              <div>9:00 AM to 8:00 PM</div>
            </div>
            <div className="flex justify-between">
              <div>WEDNESDAY</div>
              <div>9:00 AM to 8:00 PM</div>
            </div>
            <div className="flex justify-between">
              <div>THURSDAY</div>
              <div>9:00 AM to 8:00 PM</div>
            </div>
            <div className="flex justify-between">
              <div>FRIDAY</div>
              <div>9:00 AM to 8:00 PM</div>
            </div>
            <div className="flex justify-between">
              <div>SATURDAY</div>
              <div>9:00 AM to 8:00 PM</div>
            </div>
            <div className="flex justify-between">
              <div>SUNDAY</div>
              <div>BY APPOINTMENT</div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-white text-xl font-bold py-8">
            CONNECT WITH US
          </div>
          <div className="text-white flex flex-col gap-4">
            <div className="flex items-center gap-1">
              <IoLocationSharp className="text-gray-600 text-xl" />
              <div>Mississauga:2206 Dundas St. E.</div>
            </div>
            <div className="flex items-center gap-1">
              <FaPhone className="text-gray-600 text-xl" />
              <div>905-366-0123</div>
            </div>
            <div className="flex items-center gap-1">
              <IoLocationSharp className="text-gray-600 text-xl" />
              <div>Mississauga:2206 Dundas St. E.</div>
            </div>
            <div className="flex items-center gap-1">
              <FaPhone className="text-gray-600 text-xl" />
              <div>289-428-0123</div>
            </div>
            <div className="flex items-center gap-1">
              <IoMail className="text-gray-600 text-xl" />
              <div>connect@carsquad.ca</div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white text-center py-4 bg-black border-t-gray-500 border-t-[1px]">
        © 2022 FINANC1FYD. All Rights Reserved
      </div>
    </>
  );
};

export default Footer;
