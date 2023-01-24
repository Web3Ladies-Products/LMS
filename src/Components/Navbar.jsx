import React from "react";
import { FaUserCircle, FaCaretDown } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useState } from "react";
import { profileimage } from "../assets";
const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="bg-white py-10 border-b-[1px] border-[rgba(0, 0, 0, 0.2)] px-10 flex gap-6 items-center justify-end h-16">
      <div className="relative cursor-pointer w-5">
        <IoMdNotificationsOutline
          size={24}
          className=" text-lg mr-4 text-gray-800"
        />
        <span className=" absolute top-1 right-0 bg-red-500 rounded-full h-2 w-2"></span>
      </div>
      <div>
        <button className="text-[#3EB876] rounded border-[1px] border-[#afdbc5] px-5 py-[10px] bg-[#ECF8F2] ">
          Safe
        </button>
      </div>
      <div className=" flex gap-5 items-center">
        <div className="flex items-center gap-3">
          <img
            className="w-10 h-10  object-contain rounded-full"
            src={profileimage}
            alt="profile"
          />
          <div className="flex flex-col">
            <span className="font-bold">Oluchi Enebeli</span>

            <span className="text-xs text-[#767278]">Mentee</span>
          </div>
        </div>

        <button
          className=" ml-2"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <FaCaretDown className="text-lg text-gray-800" />
        </button>
        {showDropdown && (
          <div className="absolute right-5 top-10 mt-2 bg-white rounded-lg py-2">
            <a href="#" className="block px-4 py-2 text-gray-800">
              Profile
            </a>
            <a href="#" className="block px-4 py-2 text-gray-800">
              Settings
            </a>
            <a href="#" className="block px-4 py-2 text-gray-800">
              Logout
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
