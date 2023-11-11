import { useState, useEffect } from "react";
import { decodeToken } from "./../../utils/token";

export const useHooks = () => {
  const token = localStorage.getItem("token");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [gender, setGender] = useState("");
  const [currentAddress, setCurrentAddress] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [yearGraduated, setYearGraduated] = useState("");
  const [employment_Status, setEmployment_Status] = useState("");
  const [current_job, setcurrent_job] = useState("");
  const [year_current_job, setyear_current_job] = useState("");
  const [jobDuration, setJobDuration] = useState("");
  const [position_current_job, setposition_current_job] = useState("");
  const [employment_type, setemployment_type] = useState("");
  const [place_current_job, setPlace_current_job] = useState("");
  const [furtherStudies, setfurtherStudies] = useState("");
  const [enrollFurtherStudies, setEnrollFurtherStudies] = useState("");
  const [eligibility, seteligibility] = useState("");
  const [Image, setImage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleProfile = () => {
    setIsOpen(!isOpen); // Toggle the value of isOpen
  };

  useEffect(() => {
    if (token) {
      console.log("Token value", token);
      const details = decodeToken(token);
      console.log("Decoded value", details);
      //profilePic-1699202223599.jpg:1

      //GET http://127.0.0.1:5173/localhost:3001/uploads/profilePic-1699202223599.jpg 404 (Not Found)
      setFirstName(details.fname);
      setLastName(details.lname);
      setMiddleName(details.mname);
      setMobileNumber(details.phoneno);
      setGender(details.gender);
      setCurrentAddress(details.address);
      setDateOfBirth(details.bday);
      setYearGraduated(details.yeargrad);
      setEmployment_Status(details.employment_status);
      setcurrent_job(details.current_job);
      setyear_current_job(details.year_current_job);
      setJobDuration(details.job_duration_after_grad);
      setposition_current_job(details.position_current_job);
      setemployment_type(details.employment_type);
      setPlace_current_job(details.place_current_job);
      setfurtherStudies(details.engage_studies);
      setEnrollFurtherStudies(details.enroll_studies);
      seteligibility(details.eligibility);
      setImage(details.Image);
    }
  }, [localStorage.getItem("token")]);

  console.log(
    "return details",
    firstName,
    lastName,
    middleName,
    mobileNumber,
    gender,
    currentAddress,
    dateOfBirth,
    yearGraduated,
    employment_Status,
    current_job,
    year_current_job,
    jobDuration,
    position_current_job,
    employment_type,
    place_current_job,
    furtherStudies,
    enrollFurtherStudies,
    Image,
    eligibility,
    isOpen, // Include isOpen in the return object
    toggleProfile
  );

  return {
    firstName,
    lastName,
    middleName,
    mobileNumber,
    gender,
    currentAddress,
    dateOfBirth,
    yearGraduated,
    employment_Status,
    current_job,
    year_current_job,
    jobDuration,
    position_current_job,
    employment_type,
    place_current_job,
    furtherStudies,
    enrollFurtherStudies,
    Image,
    eligibility,
    isOpen, // Include isOpen in the return object
    toggleProfile,
  };
};