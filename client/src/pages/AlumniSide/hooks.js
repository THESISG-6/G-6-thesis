import { useState, useEffect } from "react";
import { decodeToken } from "./../../utils/token";

export const useHooks = () => {
  const token = localStorage.getItem("token");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [mobileNumber, setMobileNumber] = useState("");
  const MAX_MOBILE_DIGITS = 11;
  const [gender, setGender] = useState("");
 // Inside your useHooks function
const [currentAddress, setCurrentAddress] = useState(""); // Ensure this line is present

  const [dateOfBirth, setDateOfBirth] = useState("");
  const [yearGraduated, setYearGraduated] = useState("");
  const [employment_Status, setEmployment_Status] = useState("");
  const [current_job, setcurrent_job] = useState("");
  const [year_current_job, setyear_current_job] = useState("");
  const [jobDuration, setJobDuration] = useState("");
  const [position_current_job, setposition_current_job] = useState("");
  const [employment_type, setemployment_type] = useState("");
  const [Place_current_job, setPlace_current_job] = useState("");
  const [furtherStudies, setfurtherStudies] = useState("");
  const [enrollFurtherStudies, setEnrollFurtherStudies] = useState("");
  const [otherEnrollDescription, setOtherEnrollDescription] = useState("");
  const [OtherEligibilityDescription, setOtherEligibilityDescription] = useState("");
  const [eligibility, seteligibility] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleMobileNumberChange = (e) => {
    const inputValue = e.target.value;
    const cleanedValue = inputValue.replace(/\D/g, "");

    if (!isNaN(cleanedValue) && cleanedValue.length <= MAX_MOBILE_DIGITS) {
      setMobileNumber(cleanedValue);
    }
  };
  const toggleProfile = () => {
    setIsOpen(!isOpen);
  };
  
  const closeProfile = () => {
    setIsOpen(false);
  };

  const handleProfile = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("middleName", middleName);
    formData.append("mobileNumber", mobileNumber);
    formData.append("gender", gender);
    formData.append("currentAddress", currentAddress);
    formData.append("dateOfBirth", dateOfBirth);
    formData.append("yearGraduated", yearGraduated);
    formData.append("avatar", avatar);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("employment_Status", employment_Status);
    formData.append("current_job", current_job);
    formData.append("year_current_job", year_current_job);
    formData.append("jobDuration", jobDuration);
    formData.append("position_current_job", position_current_job);
    formData.append("employment_type", employment_type);
    formData.append("Place_current_job", Place_current_job);
    formData.append("furtherStudies", furtherStudies);
    formData.append("enrollFurtherStudies", enrollFurtherStudies);
    formData.append("eligibility", eligibility);

    const data = await api.put("/register", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (data.data.accessToken) {
      localStorage.setItem("token", data.data.accessToken);
    }

    const token = localStorage.getItem("token");

    if (token) {
      const details = decodeToken(token);

      console.log("USER DETAILS", details);
    }
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
      setPlace_current_job(details.Place_current_job);
      setfurtherStudies(details.engage_studies);
      setEnrollFurtherStudies(details.enroll_studies);
      seteligibility(details.eligibility);
      setProfilePic(details.image);
    }
  }, [localStorage.getItem("token")]);

  console.log(
    "return details",
    handleProfile,
    firstName,
    lastName,
    middleName,
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
    Place_current_job,
    furtherStudies,
    enrollFurtherStudies,
    profilePic,
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
    setCurrentAddress,
    setposition_current_job,
    setPlace_current_job,
    setyear_current_job,
    setcurrent_job,
    setEmployment_Status,
    setJobDuration,
    setemployment_type,
    setfurtherStudies,
    setEnrollFurtherStudies,
    setOtherEnrollDescription,
    seteligibility,
    setOtherEligibilityDescription,
    dateOfBirth,
    yearGraduated,
    employment_Status,
    current_job,
    year_current_job,
    jobDuration,
    position_current_job,
    employment_type,
    Place_current_job,
    furtherStudies,
    enrollFurtherStudies,
    profilePic,
    eligibility,
    isOpen,
    toggleProfile,
    handleProfile,
    handleMobileNumberChange,
    closeProfile,
  };
};