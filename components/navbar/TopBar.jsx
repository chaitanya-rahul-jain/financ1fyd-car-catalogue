import {
  FaFacebookSquare,
  FaInstagram,
  FaPhone,
  FaTiktok,
} from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const TopBar = () => {
  return (
    <div className="bg-slate-300 flex justify-end items-center gap-10 py-3 px-8">
      <div className="flex justify-center items-center gap-8">
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <IoLocationSharp className="text-red-600 text-xl" />
            <div>Mississauga:2206 Dundas St. E.</div>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone className="text-red-600 text-xl" />
            <div>905-366-0123</div>
          </div>
        </div>
        <div>|</div>
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <IoLocationSharp className="text-red-600 text-xl" />
            <div>Georgetown:357 Guelph St.</div>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone className="text-red-600 text-xl" />
            <div>289-428-0123</div>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <FaFacebookSquare className="text-red-600 text-2xl" />
        <FaInstagram className="text-red-600 text-2xl" />
        <FaTiktok className="text-red-600 text-2xl" />
      </div>
    </div>
  );
};

export default TopBar;
