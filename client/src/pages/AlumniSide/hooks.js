import { useState, useEffect } from "react";
import { decodeToken } from "./../../utils/token";

export const useHooks = () => {
  const token = localStorage.getItem("token");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    console.log(token);
    if (token) {
      const details = decodeToken(token);
      setFirstName(details.firstName);
      setLastName(details.lastName);
    }
  }, []);

  return { firstName, lastName };
};
