import axios from "axios";
import { useState } from "react";
import { decodeToken } from "../../utils/token";

export const useHook = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [gender, setGender] = useState("Male");
  const [mobileNumber, setMobileNumber] = useState("");
  const [yearGraduated, setYearGraduated] = useState("");
  const MAX_MOBILE_DIGITS = 11;
  const [showFormFirst, setShowFormFirst] = useState(true);
  const [employmentStatus, setEmploymentStatus] = useState("Employed");
  const [jobDuration, setJobDuration] = useState("");
  const [employment_type, setemployment_type] = useState("");
  const [furtherStudies, setFurtherStudies] = useState("NO");
  const [otherStudiesDescription, setOtherStudiesDescription] = useState("");
  const [enrollFurtherStudies, setEnrollFurtherStudies] = useState(
    "With Doctoral Units"
  );
  const [otherEnrollDescription, setOtherEnrollDescription] = useState("");
  const [eligibility, seteligibility] = useState(
    "Bar and Board Examination Eligibility"
  );
  const [otherEligibilityDescription, setOtherEligibilityDescription] =
    useState("");
  const [avatar, setAvatar] = useState(null);

  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [currentAddress, setCurrentAddress] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [position_current_Job, setPosition_current_Job] = useState("");
  const [place_current_job, setplace_current_job] = useState("");
  const [year_current_Job, setyear_current_Job] = useState("");
  const [current_job, setcurrent_job] = useState("");

  const handleEmailChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);

    const isValid = inputValue.includes("@") && inputValue.includes(".com");
    setIsEmailValid(isValid);
  };

  const handleMobileNumberChange = (e) => {
    const inputValue = e.target.value;
    const cleanedValue = inputValue.replace(/\D/g, "");

    if (!isNaN(cleanedValue) && cleanedValue.length <= MAX_MOBILE_DIGITS) {
      setMobileNumber(cleanedValue);
    }
  };

  const handlePasswordChange = (e) => {
    const inputValue = e.target.value;
    setPassword(inputValue);

    const hasUppercase = /[A-Z]/.test(inputValue);
    const hasLowercase = /[a-z]/.test(inputValue);
    const hasSpecialChar = /[!@#$%^&*()_+{}\\[\]:;<>,.?~\\-]/.test(inputValue);

    const isValid =
      hasUppercase && hasLowercase && hasSpecialChar && inputValue.length >= 8;

    setIsPasswordValid(isValid);
  };

  const handleConfirmPasswordChange = (e) => {
    const inputValue = e.target.value;
    setConfirmPassword(inputValue);
  };

  const handleNextButtonClick = () => {
    if (
      email &&
      isEmailValid &&
      mobileNumber &&
      yearGraduated &&
      isPasswordValid &&
      password === confirmPassword
    ) {
      setShowFormFirst(false);
    }
  };

  const handleBackButtonClick = () => {
    setShowFormFirst(true);
  };

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setAvatar(event.target.files[0]);
    }
  };

  const handleRegister = async (e) => {
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
    formData.append("employment_Status", employmentStatus);
    formData.append("current_job", current_job);
    formData.append("year_current_Job", year_current_Job);
    formData.append("jobDuration", jobDuration);
    formData.append("position_current_Job", position_current_Job);
    formData.append("employment_type", employment_type);
    formData.append("place_current_job", place_current_job);
    formData.append("furtherStudies", furtherStudies);
    formData.append("enrollFurtherStudies", enrollFurtherStudies);
    formData.append("eligibility", eligibility);

    const data = await axios.post("http://localhost:3001/register", formData, {
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

  return {
    gender,
    setGender,
    setYearGraduated,
    showFormFirst,
    employmentStatus,
    setEmploymentStatus,
    jobDuration,
    setJobDuration,
    employment_type,
    setemployment_type,
    furtherStudies,
    setFurtherStudies,
    otherStudiesDescription,
    setOtherStudiesDescription,
    enrollFurtherStudies,
    setEnrollFurtherStudies,
    otherEnrollDescription,
    setOtherEnrollDescription,
    eligibility,
    seteligibility,
    otherEligibilityDescription,
    setOtherEligibilityDescription,
    lastName,
    setLastName,
    firstName,
    setFirstName,
    middleName,
    setMiddleName,
    currentAddress,
    setCurrentAddress,
    dateOfBirth,
    setDateOfBirth,
    handleEmailChange,
    handleMobileNumberChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleNextButtonClick,
    handleBackButtonClick,
    mobileNumber,
    yearGraduated,
    email,
    isEmailValid,
    password,
    isPasswordValid,
    confirmPassword,
    handleImageChange,
    handleRegister,
    position_current_Job,
    year_current_Job,
    place_current_job,
    setPosition_current_Job,
    setplace_current_job,
    setyear_current_Job,
    setcurrent_job,
    current_job,
  };
};
