import React from "react";
import "../../components/Registration/form.css";
import ASidebar from "../../components/AlumniSide/ASidebar";
import AAlumniboardView from "../../components/AlumniSide/AAlumniboardView";
import { useHooks } from "./hooks";
import { AiFillEdit } from "react-icons/ai";

const AProfile = () => {
  const {
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
    year_current_Job,
    jobDuration,
    position_current_Job,
    employment_type,
    place_current_job,
    furtherStudies,
    enrollFurtherStudies,
    profilePic,
    eligibility,
  } = useHooks();

  console.log("profilePic value", profilePic);

  return (
    <div className="flex">
      <div className="basis-[12%] h-[100vh] border">
        <ASidebar />
      </div>
      <div className="basis-[88%] border h-[100vh] overflow-scroll">
        <AAlumniboardView />

        <div className="min-h-screen flex flex-col items-center mx-auto bg-green-100">
          <div className="body-container">
            <div className="flex justify-end text-2xl">
              <button>
                <AiFillEdit />
              </button>
            </div>
            <div className="profile-picture">
              {profilePic && (
                <img
                  src={profilePic}
                  alt="profile picture"
                  className="w-40 h-40 rounded-full mx-auto "
                  style={{
                    backgroundSize: "contain",
                  }}
                />
              )}
            </div>
            <form action="#">
              <div className="form first">
                <div className="details personal">
                  <div className="fields">
                    <div className="input-fields">
                      <label className="header">LastName</label>
                      <label className="label">{lastName}</label>
                    </div>
                    <div className="input-fields">
                      <label className="header">FirstName</label>
                      <label className="labeled">{firstName}</label>
                    </div>
                    <div className="input-fields">
                      <label className="header">MiddleName</label>
                      <label className="label">{middleName}</label>
                    </div>

                    <div className="input-fields">
                      <label className="header">Mobile Number </label>
                      <label className="label">{mobileNumber} </label>
                    </div>
                    <div className="input-fields">
                      <label className="header">Gender</label>
                      <label className="label">{gender}</label>
                    </div>
                    <div className="input-fields">
                      <label className="header">Current Address</label>
                      <label className="label">{currentAddress}</label>
                    </div>
                    <div className="input-fields">
                      <label className="header">Date of Birth</label>
                      <label className="label">{dateOfBirth}</label>
                    </div>
                    <div className="input-fields">
                      <label className="header">Year Graduated</label>
                      <label className="label">{yearGraduated}</label>
                    </div>
                    <div className="input-fields">
                      <label className="header">Employment Status</label>
                      <label className="label">{employment_Status}</label>
                    </div>
                    <div className="input-fields">
                      <label className="header">Current Job</label>
                      <label className="label">{current_job}</label>
                    </div>
                    <div className="input-fields">
                      <label className="header">Year(s) in Current Job</label>
                      <label className="label">{year_current_Job}</label>
                    </div>
                    <div className="input-fields">
                      <label className="header">
                        How long did you land a job after graduation?
                      </label>
                      <label className="label">{jobDuration}</label>
                    </div>
                    <div className="input-fields">
                      <label className="header">Position in Current Job</label>
                      <label className="label">{position_current_Job}</label>
                    </div>
                    <div className="input-fields">
                      <label className="header">Employment Type</label>
                      <label className="label">{employment_type}</label>
                    </div>
                    <div className="input-fields">
                      <label className="header">
                        Employer/Place of Current Job{" "}
                      </label>
                      <label className="label">{place_current_job} </label>
                    </div>

                    <div className="input-fields">
                      <label className="header">
                        Engage in further Studies?
                      </label>
                      <label className="label">{furtherStudies}</label>
                    </div>
                    <div className="input-fields">
                      <label className="header">Enroll Further Studies?</label>
                      <label className="label">{enrollFurtherStudies}</label>
                    </div>
                    <div className="input-fields">
                      <label className="header">
                        Eligibility Acquired (if any)
                      </label>
                      <label className="label">{eligibility}</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="buttons">
                <div className="backBtn">
                  <i className="uil uil-navigator"></i>
                  <span className="btnText">Update</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AProfile;
