import React from "react";

import { Link } from "react-router-dom";
import { useHooks } from "./hooks";

const AAlumniboardView = () => {
  const {
    firstName,
    lastName,
    middleName,
    profilePic,
    isDropdownOpen,
    toggleDropdown,
    imageStyles
  } = useHooks();

  return (
    <div className="flex items-center justify-between h-[70px] shadow-lg lg:px-[25px] px-[20px]">
      <div className="flex items-center rounded-[5px]"></div>
      <div className="flex items-center gap-[15px] relative">
        <div className="flex items-center gap-[25px] border-r-[1px] pr-[25px]">
          {/* <FaRegBell />
          <FaEnvelope /> */}
        </div>
        <div className="flex items-center gap-[15px] relative">
          <p>
            {firstName} {lastName} {middleName}
          </p>
          <div
            className="w-10 h-10 rounded-full cursor-pointer overflow-hidden"
            onClick={toggleDropdown}
          >
            {profilePic && (
              <img
                src={profilePic}
                alt="profile picture"
                className="rounded-full mx-auto"
                style={imageStyles}
              />
            )}
          </div>

          {isDropdownOpen && (
            <div className="bg-white border z-20 flex flex-col mt-[120px] space-y-[10px] absolute right-0">
              <Link to="/AProfile">
                <p className="cursor-pointer hover:text-blue-500 font-semibold">
                  Profile
                </p>
              </Link>
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
