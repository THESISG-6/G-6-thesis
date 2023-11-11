import React from "react";
import "../../components/Registration/form.css";
import ASidebar from "../../components/AlumniSide/ASidebar";
import AAlumniboardView from "../../components/AlumniSide/AAlumniboardView";
import { useHooks } from "./hooks";
import { AiFillCloseCircle, AiFillEdit } from "react-icons/ai";

const AProfile = () => {
  const {
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
    closeProfile,
    handleMobileNumberChange,
  } = useHooks();

  console.log(
    "profilePic value",
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
    Place_current_job,
    furtherStudies,
    enrollFurtherStudies
  );

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
              <button onClick={toggleProfile}>
                <AiFillEdit />
              </button>
            </div>
            {/* /*Modal to Edit Logs */ }
        <form action="#">{/* onSubmit={handleProfile}*/}
            {isOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-10 overflow-x-auto m-10">
              <div className="absolute inset-0 bg-black opacity-30"></div>
              <div className="bg-white p-4 rounded w-2/3 shadow-lg z-20">
                <h2 className="text-lg font-semibold mb-2 text-center">
                  Update Profile
                </h2>
            <div className="flex justify-end text-2xl" onClick={closeProfile}>

                <AiFillCloseCircle />
            </div>
                <div className="fields">


                <div className="input-fields">
                    <label>Mobile Number </label>
                    <input
                      type="text"
                      placeholder="Enter mobile number"
                      required
                      value={mobileNumber}
                      onChange={handleMobileNumberChange}
                    />
                  </div>
                  <div className="input-fields">
  <label>Current Address</label>
  <input
    type="text"
    placeholder="Brgy.; City/Municipality;Province"
    required
    defaultValue={currentAddress}
    onChange={(e) => setCurrentAddress(e.target.defaultValue)}
  />
</div>

                  <div className="input-fields">
                    <label>Image</label>
                    <input type="file" required /> {/*onChange={handleImageChange}*/} 
                  </div>
                  
                  <div className="input-fields">
                      <label className="header">Year(s) in Current Job</label>
                        <input
                          value={year_current_job}
                          onChange={(e) => setyear_current_job(e.target.value)}
                          type="number"
                          placeholder=""
                          required
                        />
                    </div>
                    <div className="input-fields">
                      <label className="header">
                        How long did you land a job after graduation?
                      </label>
                        <select
                          value={jobDuration}
                          onChange={(e) => setJobDuration(e.target.value)}
                          required
                        >
                          <option value="">Select Duration</option>
                          <option value="0-6 months">0-6 months</option>
                          <option value="6 months - 1 year">
                            6 months - 1 year
                          </option>
                          <option value="1 year - 2 years">
                            1 year - 2 years
                          </option>
                          <option value="2 years above">2 years above</option>
                        </select>
                    </div>
                    <div className="input-fields">
                      <label className="header">Position in Current Job</label>
                        <input
                          value={position_current_job}
                          onChange={(e) => {
                            setposition_current_job(e.target.value);
                          }}
                          type="text"
                          required
                        />
                    </div>
                    <div className="input-fields">
                      <label className="header">Employment Type</label>
                        <select
                          value={employment_type}
                          onChange={(e) => setemployment_type(e.target.value)}
                          required
                        >
                          <option value="">Select Employment Type</option>
                          <option value="Regular">Regular</option>
                          <option value="Casual">Casual</option>
                          <option value="Project">Project</option>
                          <option value="Seasonal">Seasonal</option>
                          <option value="Fixed">Fixed-term</option>
                          <option value="Probationary">Probationary</option>
                        </select>
                    </div>
                    <div className="input-fields">
                      <label className="header">
                        Employer/Place of Current Job{" "}
                      </label>
                        <input
                          value={Place_current_job}
                          onChange={(e) => {
                            setPlace_current_job(e.target.value);
                          }}
                          type="text"
                          required
                        />
                    </div>

                    <div className="input-fields">
                      <label className="header">
                        Engage in further Studies?
                      </label>
                        <select
                          value={furtherStudies}
                          onChange={(e) => {
                            setFurtherStudies(e.target.value);
                          }}
                          required
                        >
                          <option value="YES">YES</option>
                          <option value="NO">NO</option>
                        </select>
                    </div>
                    <div className="input-fields">
                      <label className="header">Enroll Further Studies?</label>
                        <select
                          value={enrollFurtherStudies}
                          onChange={(e) => {
                            setEnrollFurtherStudies(e.target.value);
                            if (e.target.value !== "Other") {
                              setOtherEnrollDescription(""); // Clear custom input if not "Other"
                            }
                          }}
                          required
                          // Add the disabled attribute based on the state
                        >
                          <option value="With Doctoral Units">
                            With Doctoral Units
                          </option>
                          <option value="MA/MS Graduate">MA/MS Graduate</option>
                          <option value="With MA/MS Units">
                            With MA/MS Units
                          </option>
                          <option value="Other Baccalaureate Course">
                            Other Baccalaureate Course
                          </option>
                          <option value="Not Applicable">Not Applicable</option>
                          <option value="Other">Other</option>
                        </select>
                        {enrollFurtherStudies === "Other" && (
                          <input
                            type="text"
                            placeholder="Please specify"
                            value={otherEnrollDescription}
                            onChange={(e) =>
                              setOtherEnrollDescription(e.target.value)
                            }
                            required
                          />
                        )}
                    </div>
                    <div className="input-fields">
                      <label className="header">
                        Eligibility Acquired (if any)
                      </label>
                        <select
                          value={eligibility}
                          onChange={(e) => {
                            seteligibility(e.target.value);
                            if (e.target.value !== "Other") {
                              setOtherEligibilityDescription(""); // Clear custom input if not "Other"
                            }
                          }}
                          required
                        >
                          <option value="Bar and Board Examination Eligibility">
                            Bar and Board Examination Eligibility
                          </option>
                          <option value="Pilot Eligibility for Military Aviators">
                            Pilot Eligibility for Military Aviators
                          </option>
                          <option value="National Service Training Eligibility">
                            National Service Training Eligibility
                          </option>
                          <option value="Philippine National Police (PNP) Entrance Eligibility">
                            Philippine National Police (PNP) Entrance
                            Eligibility
                          </option>
                          <option value="Barangay Health Workers Eligibility">
                            Barangay Health Workers Eligibility
                          </option>
                          <option value="Career Service Professional Eligibility">
                            Career Service Professional
                          </option>
                          <option value="Sub-Professional Eligibility">
                            Career Service Sub Professional
                          </option>
                          <option value="Honor Graduate Eligibility">
                            Honor Graduate Eligibility
                          </option>
                          <option value="Industrial Safety and Health Eligibility">
                            Industrial Safety and Health Eligibility
                          </option>
                          <option value="Philippine Veterans Affairs Office (PVAO) Eligibility">
                            Philippine Veterans Affairs Office (PVAO)
                            Eligibility
                          </option>
                          <option value="Fire Officer Eligibility">
                            Fire Officer Eligibility
                          </option>
                          <option value="Licensed Professional Teacher Eligibility">
                            Licensed Professional Teacher Eligibility
                          </option>
                          <option value="Other">Other</option>
                        </select>
                        {eligibility === "Other" && (
                          <input
                            type="text"
                            placeholder="Please specify"
                            value={setOtherEligibilityDescription}
                            onChange={(e) =>
                              setOtherEligibilityDescription(e.target.value)
                            }
                            required
                          />
                        )}
                    </div>
                <span className="title">Employment Status</span>
                <div className="fields">
                  <div className="input-fields">
                    <select
                      defaultValue={employment_Status}
                      onChange={(e) => setEmployment_Status(e.target.defaultValue)}
                      required
                    >
                      <option defaultValue="Employed">Employed</option>
                      <option defaultValue="Unemployed">Unemployed</option>
                    </select>
                  </div>

                  {employment_Status === "Employed" && (
                    <>
                      <div className="input-fields">
                        <label>Current Job</label>
                        <input
                          defaultValue={current_job}
                          onChange={(e) => setcurrent_job(e.target.defaultValue)}
                          type="text"
                          placeholder=""
                          required
                        />
                      </div>
                      <div className="input-fields">
                        <label>Year(s) in Current Job</label>
                        <input
                          defaultValue={year_current_job}
                          onChange={(e) => setyear_current_job(e.target.defaultValue)}
                          type="number"
                          placeholder=""
                          required
                        />
                      </div>
                      <div className="input-fields">
                        <label>
                          How long did you land a job after graduation?
                        </label>
                        <select
                          defaultValue={jobDuration}
                          onChange={(e) => setJobDuration(e.target.defaultValue)}
                          required
                        >
                          <option defaultValue="">Select Duration</option>
                          <option defaultValue="0-6 months">0-6 months</option>
                          <option defaultValue="6 months - 1 year">
                            6 months - 1 year
                          </option>
                          <option defaultValue="1 year - 2 years">
                            1 year - 2 years
                          </option>
                          <option defaultValue="2 years above">2 years above</option>
                        </select>
                      </div>
                      <div className="input-fields">
                        <label>Position in Current Job</label>
                        <input
                          defaultValue={position_current_job}
                          onChange={(e) => {
                            setposition_current_job(e.target.defaultValue);
                          }}
                          type="text"
                          required
                        />
                      </div>
                      <div className="input-fields">
                        <label>Employment Type</label>
                        <select
                          defaultValue={employment_type}
                          onChange={(e) => setemployment_type(e.target.defaultValue)}
                          required
                        >
                          <option defaultValue="">Select Employment Type</option>
                          <option defaultValue="Regular">Regular</option>
                          <option defaultValue="Casual">Casual</option>
                          <option defaultValue="Project">Project</option>
                          <option defaultValue="Seasonal">Seasonal</option>
                          <option defaultValue="Fixed">Fixed-term</option>
                          <option defaultValue="Probationary">Probationary</option>
                        </select>
                      </div>
                      <div className="input-fields">
                        <label>Employer/Place of Current Job </label>
                        <input
                          defaultValue={Place_current_job}
                          onChange={(e) => {
                            setPlace_current_job(e.target.defaultValue);
                          }}
                          type="text"
                          required
                        />
                      </div>
                      <div className="input-fields">
                        <label>Engage in further Studies?</label>
                        <select
                          defaultValue={furtherStudies}
                          onChange={(e) => {
                            setfurtherStudies(e.target.defaultValue);
                          }}
                          required
                        >
                          <option defaultValue="YES">YES</option>
                          <option defaultValue="NO">NO</option>
                        </select>
                      </div>

                      <div className="input-fields">
                        <label>Enroll Further Studies?</label>
                        <select
                          defaultValue={enrollFurtherStudies}
                          onChange={(e) => {
                            setEnrollFurtherStudies(e.target.defaultValue);
                            if (e.target.defaultValue !== "Other") {
                              setOtherEnrollDescription(""); // Clear custom input if not "Other"
                            }
                          }}
                          required
                          // Add the disabled attribute based on the state
                        >
                          <option defaultValue="With Doctoral Units">
                            With Doctoral Units
                          </option>
                          <option defaultValue="MA/MS Graduate">MA/MS Graduate</option>
                          <option defaultValue="With MA/MS Units">
                            With MA/MS Units
                          </option>
                          <option defaultValue="Other Baccalaureate Course">
                            Other Baccalaureate Course
                          </option>
                          <option defaultValue="Not Applicable">Not Applicable</option>
                          <option defaultValue="Other">Other</option>
                        </select>
                        {enrollFurtherStudies === "Other" && (
                          <input
                            type="text"
                            placeholder="Please specify"
                            defaultValue={otherEnrollDescription}
                            onChange={(e) =>
                              setOtherEnrollDescription(e.target.defaultValue)
                            }
                            required
                          />
                        )}
                      </div>

                      <div className="input-fields">
                        <label>Eligibility Acquired (if any)</label>
                        <select
                          defaultValue={eligibility}
                          onChange={(e) => {
                            seteligibility(e.target.defaultValue);
                            if (e.target.defaultValue !== "Other") {
                              setOtherEligibilityDescription(""); // Clear custom input if not "Other"
                            }
                          }}
                          required
                        >
                          <option defaultValue="Bar and Board Examination Eligibility">
                            Bar and Board Examination Eligibility
                          </option>
                          <option defaultValue="Pilot Eligibility for Military Aviators">
                            Pilot Eligibility for Military Aviators
                          </option>
                          <option defaultValue="National Service Training Eligibility">
                            National Service Training Eligibility
                          </option>
                          <option defaultValue="Philippine National Police (PNP) Entrance Eligibility">
                            Philippine National Police (PNP) Entrance
                            Eligibility
                          </option>
                          <option defaultValue="Barangay Health Workers Eligibility">
                            Barangay Health Workers Eligibility
                          </option>
                          <option defaultValue="Career Service Professional Eligibility">
                            Career Service Professional
                          </option>
                          <option defaultValue="Sub-Professional Eligibility">
                            Career Service Sub Professional
                          </option>
                          <option defaultValue="Honor Graduate Eligibility">
                            Honor Graduate Eligibility
                          </option>
                          <option defaultValue="Industrial Safety and Health Eligibility">
                            Industrial Safety and Health Eligibility
                          </option>
                          <option defaultValue="Philippine Veterans Affairs Office (PVAO) Eligibility">
                            Philippine Veterans Affairs Office (PVAO)
                            Eligibility
                          </option>
                          <option defaultValue="Fire Officer Eligibility">
                            Fire Officer Eligibility
                          </option>
                          <option defaultValue="Licensed Professional Teacher Eligibility">
                            Licensed Professional Teacher Eligibility
                          </option>
                          <option defaultValue="Other">Other</option>
                        </select>
                        {eligibility === "Other" && (
                          <input
                            type="text"
                            placeholder="Please specify"
                            defaultValue={setOtherEligibilityDescription}
                            onChange={(e) =>
                              setOtherEligibilityDescription(e.target.defaultValue)
                            }
                            required
                          />
                        )}
                      </div>
                      
                    </>
                  )}

                  {employment_Status === "Unemployed" && (
                    <>
                      <div className="input-fields">
                        <label>Engage in further Studies?</label>
                        <select
                          onChange={(e) => {
                            setfurtherStudies(e.target.defaultValue);
                          }}
                          required
                        >
                          <option defaultValue="YES">YES</option>
                          <option defaultValue="NO">NO</option>
                        </select>
                      </div>
                      <div className="input-fields">
                        <label>Enroll Further Studies?</label>
                        <select
                          defaultValue={enrollFurtherStudies}
                          onChange={(e) => {
                            setEnrollFurtherStudies(e.target.defaultValue);
                            if (e.target.defaultValue !== "Other") {
                              setOtherEnrollDescription(""); // Clear custom input if not "Other"
                            }
                          }}
                          required
                        >
                          <option defaultValue="With Doctoral Units">
                            With Doctoral Units
                          </option>
                          <option defaultValue="MA/MS Graduate">MA/MS Graduate</option>
                          <option defaultValue="With MA/MS Units">
                            With MA/MS Units
                          </option>
                          <option defaultValue="Other Baccalaureate Course">
                            Other Baccalaureate Course
                          </option>
                          <option defaultValue="Not Applicable">Not Applicable</option>
                          <option defaultValue="Other">Other</option>
                        </select>
                        {enrollFurtherStudies === "Other" && (
                          <input
                            type="text"
                            placeholder="Please specify"
                            defaultValue={setOtherEnrollDescription}
                            onChange={(e) =>
                              setOtherEnrollDescription(e.target.defaultValue)
                            }
                            required
                          />
                        )}
                      </div>
                      <div className="input-fields">
                        <label>Eligibility Acquired (if any)</label>
                        <select
                          defaultValue={eligibility}
                          onChange={(e) => {
                            setEligibilityAcquired(e.target.defaultValue);
                            if (e.target.defaultValue !== "Other") {
                              setOtherEligibilityDescription(""); // Clear custom input if not "Other"
                            }
                          }}
                          required
                        >
                          <option defaultValue="Bar and Board Examination Eligibility">
                            Bar and Board Examination Eligibility
                          </option>
                          <option defaultValue="Pilot Eligibility for Military Aviators">
                            Pilot Eligibility for Military Aviators
                          </option>
                          <option defaultValue="National Service Training Eligibility">
                            National Service Training Eligibility
                          </option>
                          <option defaultValue="Philippine National Police (PNP) Entrance Eligibility">
                            Philippine National Police (PNP) Entrance
                            Eligibility
                          </option>
                          <option defaultValue="Barangay Health Workers Eligibility">
                            Barangay Health Workers Eligibility
                          </option>
                          <option defaultValue="Career Service Professional and Sub-Professional Eligibility">
                            Career Service Professional and Sub-Professional
                            Eligibility
                          </option>
                          <option defaultValue="Honor Graduate Eligibility">
                            Honor Graduate Eligibility
                          </option>
                          <option defaultValue="Industrial Safety and Health Eligibility">
                            Industrial Safety and Health Eligibility
                          </option>
                          <option defaultValue="Philippine Veterans Affairs Office (PVAO) Eligibility">
                            Philippine Veterans Affairs Office (PVAO)
                            Eligibility
                          </option>
                          <option defaultValue="Fire Officer Eligibility">
                            Fire Officer Eligibility
                          </option>
                          <option defaultValue="Licensed Professional Teacher Eligibility">
                            Licensed Professional Teacher Eligibility
                          </option>
                          <option defaultValue="Other">Other</option>
                        </select>
                        {eligibility === "Other" && (
                          <input
                            type="text"
                            placeholder="Please specify"
                            defaultValue={setOtherEligibilityDescription}
                            onChange={(e) =>
                              setOtherEligibilityDescription(e.target.defaultValue)
                            }
                            required
                          />
                        )}
                      </div>
                    </>
                  )}
                </div>
                </div>
              </div>
            </div>
          )}
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
                      <label className="header">Year Current Job</label>
                      <label className="label">{year_current_job}</label>
                    </div>
                    
                    <div className="input-fields">
                      <label className="header">Job Duration</label>
                      <label className="label">{jobDuration}</label>
                    </div>
                    
                    <div className="input-fields">
                      <label className="header">Position Current Job</label>
                      <label className="label">{position_current_job}</label>
                    </div>
                    <div className="input-fields">
                      <label className="header">Employment Type</label>
                      <label className="label">{employment_type}</label>
                    </div>
                    <div className="input-fields">
                      <label className="header">Place Current Job</label>
                      <label className="label">{Place_current_job}</label>
                    </div>
                    <div className="input-fields">
                      <label className="header">Further Studies</label>
                      <label className="label">{furtherStudies}</label>
                    </div>
                    <div className="input-fields">
                      <label className="header">Enroll Further Studies</label>
                      <label className="label">{enrollFurtherStudies}</label>
                    </div>
                    <div className="input-fields">
                      <label className="header">Eligibility</label>
                      <label className="label">{eligibility}</label>
                    </div>

                  </div>
                  
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