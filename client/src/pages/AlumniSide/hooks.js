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
  const [current_Job, setCurrent_Job] = useState("");
  const [year_current_Job, setYear_current_Job] = useState("");
  const [jobDuration, setJobDuration] = useState("");
  const [position_current_Job, setPosition_current_Job] = useState("");
  const [Employment_Type, setEmployment_Type] = useState("");
  const [place_current_job, setPlace_current_job] = useState("");
  const [furtherStudies, setfurtherStudies] = useState("");
  const [enrollFurtherStudies, setEnrollFurtherStudies] = useState("");
  const [eligibility, seteligibility] = useState("");
  const [profilePic, setProfilePic] = useState("");
  

  useEffect(() => {
    console.log(token);
    if (token) {
      const details = decodeToken(token);
      console.log("details", details);
      //profilePic-1699202223599.jpg:1

      //GET http://127.0.0.1:5173/localhost:3001/uploads/profilePic-1699202223599.jpg 404 (Not Found)
      setFirstName(details.firstName);
      setLastName(details.lastName);
      setMiddleName(details.middleName);
      setMobileNumber(details.mobileNumber);
      setGender(details.gender);
      setCurrentAddress(details.currentAddress);
      setDateOfBirth(details.dateOfBirth);
      setYearGraduated(details.yearGraduated);
      setEmployment_Status(details.employment_Status);
      setCurrent_Job(details.current_Job);
      setYear_current_Job(details.year_current_Job);
      setJobDuration(details.jobDuration);
      setPosition_current_Job(details.position_current_Job);
      setEmployment_Type(details.Employment_Type);
      setPlace_current_job(details.place_current_job);
      setfurtherStudies(details.furtherStudies);
      setEnrollFurtherStudies(details.enrollFurtherStudies);
      seteligibility(details.eligibility);
      setProfilePic(details.avatar);
    }
  }, []);

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
    current_Job,
    year_current_Job,
    jobDuration,
    position_current_Job,
    Employment_Type,
    place_current_job,
    furtherStudies,
    enrollFurtherStudies,
    profilePic,
    eligibility,
  };
};
