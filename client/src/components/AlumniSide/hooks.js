import { useState, useEffect } from "react";
import { decodeToken } from "../../utils/token";

export const useHooks = () => {
  const token = localStorage.getItem("token");
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [mname, setmname] = useState("");
  const [Image, setImage] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const imageStyles = {
    backgroundSize: "cover",
  };
  useEffect(() => {
    if (token) {
      const details = decodeToken(token);
      setfname(details.fname);
      setlname(details.lname);
      setmname(details.mname);
      setImage(details.Image);
    }
  }, [token]);

  return {
    fname,
    lname,
    mname,
    Image,
    isDropdownOpen, // Added isDropdownOpen to the return object
    toggleDropdown,
    imageStyles,
  };
};
