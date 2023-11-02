import React, { useState } from "react";
import "../../components/Registration/form.css";
import ASidebar from "../../components/AlumniSide/ASidebar";
import AAlumniboardView from "../../components/AlumniSide/AAlumniboardView";
import Profile from "../../assets/prof.jpg";

const AProfile = () => {
  return (
    <div className="flex">
      <div className="basis-[12%] h-[100vh] border">
        <ASidebar />
      </div>
      <div className="basis-[88%] border h-[100vh] overflow-scroll">
        <AAlumniboardView />

        <div className="min-h-screen flex flex-col items-center mx-auto bg-green-100">
          <div className="body-container">
            <div className="profile-picture">
              <img
                src={Profile}
                alt="photo"
                className="w-40 h-40 rounded-full mx-auto"
              />
            </div>
            <form action="#">
              <div className="form first">
                <div className="details personal">
                  <div className="fields">
                    <div className="input-fields">
                      <label>LastName</label>
                      <input type="text" placeholder="Enter your lastname" />
                    </div>
                    <div className="input-fields">
                      <label>FirstName</label>
                      <input type="text" placeholder="Enter your firstname" />
                    </div>
                    <div className="input-fields">
                      <label>MiddleName</label>
                      <input type="text" placeholder="Enter your middlename" />
                    </div>

                    <div className="input-fields">
                      <label>Mobile Number </label>
                      <input type="text" placeholder="09667705924" />
                    </div>
                    <div className="input-fields">
                      <label>Gender</label>
                      <input type="text" placeholder="Male" required />
                    </div>
                    <div className="input-fields">
                      <label>Current Address</label>
                      <input
                        type="text"
                        placeholder="Brgy.; City/Municipality;Province"
                      />
                    </div>
                    <div className="input-fields">
                      <label>Date of Birth</label>
                      <input type="" placeholder="05/02/2023" required />
                    </div>
                    <div className="input-fields">
                      <label>Year Graduated</label>
                      <input type="text" placeholder="2022-2023" required />
                    </div>
                    <div className="input-fields">
                      <label>Employment Status</label>
                      <input type="text" placeholder="Employed" />
                    </div>
                    <div className="input-fields">
                      <label>Current Job</label>
                      <input type="text" placeholder="Military Officer" />
                    </div>
                    <div className="input-fields">
                      <label>Year(s) in Current Job</label>
                      <input type="number" placeholder="5 " />
                    </div>
                    <div className="input-fields">
                      <label>
                        How long did you land a job after graduation?
                      </label>
                      <input type="text" placeholder="6 months - 1 year" />
                    </div>
                    <div className="input-fields">
                      <label>Position in Current Job</label>
                      <input type="text" placeholder="2 Lt" />
                    </div>
                    <div className="input-fields">
                      <label>Employment Type</label>
                      <input type="text" placeholder="Regular" />
                    </div>
                    <div className="input-fields">
                      <label>Employer/Place of Current Job </label>
                      <input type="text" placeholder="Tabak 1ID" />
                    </div>

                    <div className="input-fields">
                      <label>Engage in further Studies?</label>

                      <input type="text" placeholder="Yes" />
                    </div>
                    <div className="input-fields">
                      <label>Enroll Further Studies?</label>
                      <input type="text" placeholder="Scout Ranger Schooling" />
                    </div>
                    <div className="input-fields">
                      <label>Eligibility Acquired (if any)</label>
                      <input type="text" placeholder="Milatary Officer Eligibility" />
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
