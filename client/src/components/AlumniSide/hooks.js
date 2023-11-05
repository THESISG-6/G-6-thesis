import { useState, useEffect } from "react";
import { decodeToken } from "../../utils/token";

export const useHooks = () => {
  const token = localStorage.getItem("token");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const imageStyles = {
    backgroundSize: "cover",
  };
  useEffect(() => {
    console.log(token);
    if (token) {
      const details = decodeToken(token);
      console.log("details", details);
      setFirstName(details.firstName);
      setLastName(details.lastName);
      setMiddleName(details.middleName);
      setProfilePic(details.avatar);
    }
  }, [token]);

  return {
    firstName,
    lastName,
    middleName,
    profilePic,
    isDropdownOpen, // Added isDropdownOpen to the return object
    toggleDropdown,
    imageStyles,
  };
};
