import React, { useState } from "react";
import { FaEnvelope, FaRegBell, FaSearch } from "react-icons/fa";
import jam from "../../assets/jam.jpeg";
import { Link } from "react-router-dom";

const AAlumniboardView = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex items-center justify-between h-[70px] shadow-lg lg:px-[25px] px-[20px]">
      <div className="flex items-center rounded-[5px]">
        
      </div>
      <div className="flex items-center gap-[15px] relative">
        <div className="flex items-center gap-[25px] border-r-[1px] pr-[25px]">
          <FaRegBell />
          <FaEnvelope />
        </div>
        <div className="flex items-center gap-[15px] relative">
          <p>John Nigels Remedios</p>
          <div
            className="w-10 h-10 rounded-full cursor-pointer overflow-hidden"
            onClick={toggleDropdown}
          >
            <img
              src={jam}
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>

          {isDropdownOpen && (
            <div className="bg-white border z-20 flex flex-col mt-[15px] space-y-[10px] absolute right-0">
              <p className="cursor-pointer hover:text-blue-500 font-semibold">
                Profile
              </p>
              <p className="cursor-pointer hover:text-blue-500 font-semibold">
                <Link to="/">Logout</Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AAlumniboardView;
