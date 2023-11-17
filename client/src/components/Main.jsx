import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { FaEllipsisV, FaUserGraduate, FaTimes } from "react-icons/fa";
import { MdWorkOff, MdWork } from "react-icons/md";
import { BsBuildingCheck } from "react-icons/bs";
import PieComponent from "./PieComponent";
import { Progress } from "antd";
import api from "../configs/axios-base-url";
// import BarComponent from "./BarComponent";

const Main = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [alumnidata, setAlumniData] = useState([]);
  const [loading, setLoading] = useState(true);

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const fetchAlumniData = async () => {
    try {
      const res = await api.get("/register");
      setAlumniData(res.data);
    } catch (err) {
      console.error("Error fetching alumni data:", err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchAlumniData();
  }, []);
  if (loading) {
    return <p>Loading...</p>; // or some loading indicator
  }
  const AlumniEmployed = alumnidata.filter(
    (item) => item.employment_status === "Employed"
  ).length;

  const AlumniUnemployed = alumnidata.filter(
    (item) => item.employment_status === "Unemployed"
  ).length;
  const AlumniEligibility = alumnidata.filter(
    (item) => item.eligibility
  ).length;
  const StatusRegular = alumnidata.filter(
    (item) => item.employment_type === "Regular"
  ).length;
  const StatusCasual = alumnidata.filter(
    (item) => item.employment_type === "Casual"
  ).length;
  const StatusSeasonal = alumnidata.filter(
    (item) => item.employment_type === "Seasonal"
  ).length;
  const StatusFixedTerm = alumnidata.filter(
    (item) => item.employment_type === "Fixed-Term"
  ).length;
  const StatusProbationary = alumnidata.filter(
    (item) => item.employment_type === "Probationary"
  ).length;
  const EligibilityBar = alumnidata.filter(
    (item) => item.eligibility === "Bar and Board Examination"
  ).length;
  const EligibilityPilot = alumnidata.filter(
    (item) => item.eligibility === "Pilot Eligibility for Military Aviators"
  ).length;
  const EligibilityNational = alumnidata.filter(
    (item) => item.eligibility === "National Service Training Eligibility"
  ).length;
  const EligibilityPhilippine = alumnidata.filter(
    (item) =>
      item.eligibility ===
      "Philippine National Police (PNP) Entrance Eligibility"
  ).length;
  const EligibilityProfessional = alumnidata.filter(
    (item) => item.eligibility === "Career Service Professional Eligibility"
  ).length;
  const EligibilitySubProfessional = alumnidata.filter(
    (item) => item.eligibility === "Career Service Sub Professional"
  ).length;
  const EligibilityBarangay = alumnidata.filter(
    (item) => item.eligibility === "Barangay Health Workers"
  ).length;
  const EligibilityHonor = alumnidata.filter(
    (item) => item.eligibility === "Honor Graduate Eligibility"
  ).length;
  const EligibilityIndustrial = alumnidata.filter(
    (item) => item.eligibility === "Industrial Safety and Health Eligibility"
  ).length;
  const EligibilityPVAO = alumnidata.filter(
    (item) =>
      item.eligibility ===
      "Philippine Veterans Affairs Office (PVAO) Eligibility"
  ).length;
  const EligibilityFire = alumnidata.filter(
    (item) => item.eligibility === "Fire Officer Eligibility"
  ).length;
  const EligibilityLicensed = alumnidata.filter(
    (item) => item.eligibility === "Licensed Professional Teacher Eligibility"
  ).length;
  const data = [
    {
      name: "2014-2015",
      Graduates: 29,
    },
    {
      name: "2015-2016",
      Graduates: 19,
    },
    {
      name: "2016-2017",
      Graduates: 35,
    },
    {
      name: "2017-2018",
      Graduates: 85,
    },
    {
      name: "2018-2019",
      Graduates: 32,
    },
    {
      name: "2019-2020",
      Graduates: 45,
    },
    {
      name: "2020-2021",
      Graduates: 46,
    },
    {
      name: "2021-2022",
      Graduates: 19,
    },
    {
      name: "2022-2023",
      Graduates: 14,
    },
  ];

  const positionStatusContent = (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg w-[40%] h-[60%]">
      <h2 className="text-green-700 text-[16px] leading-[19px] font-bold mt-0 mb-4 text-center">
        Employment Type
      </h2>
      <div className="px-[25px] space-y-[15px] py-[15px]">
        <div>
          <h2>Regular</h2>
          <Progress
            percent={StatusRegular}
            status="active"
            strokeColor="#00C49F"
          />
        </div>
        <div>
          <h2>Casual</h2>
          <Progress
            percent={StatusCasual}
            status="active"
            strokeColor="#0088FE"
          />
        </div>
        <div>
          <h2>Seasonal</h2>
          <Progress
            percent={StatusSeasonal}
            status="active"
            strokeColor="#FFBB28"
          />
        </div>
        <div>
          <h2>Fixed-term</h2>
          <Progress
            percent={StatusFixedTerm}
            status="active"
            strokeColor="#FF8042"
          />
        </div>
        <div>
          <h2>Probationary</h2>
          <Progress
            percent={StatusProbationary}
            status="active"
            strokeColor="#FFBB28"
          />
        </div>
      </div>
      <button
        className="absolute top-2 right-2 text-gray-500"
        onClick={closeModal}
      >
        <FaTimes fontSize={20} />
      </button>
    </div>
  );

  const eligibilityStatusContent = (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg overflow-x-auto w-[40%] h-full">
      <h2 className="text-green-700 text-[16px] leading-[19px] font-bold mt-0 mb-4 text-center">
        Eligibility Status
      </h2>
      <div className="px-[25px] space-y-[15px] py-[15px]">
        <div>
          <h2>Bar and Board Examination</h2>
          <Progress
            percent={EligibilityBar}
            status="active"
            strokeColor="#00C49F"
          />
        </div>
        <div>
          <h2> Pilot Eligibility for Military Aviators</h2>
          <Progress
            percent={EligibilityPilot}
            status="active"
            strokeColor="#0088FE"
          />
        </div>
        <div>
          <h2> National Service Training Eligibility</h2>
          <Progress
            percent={EligibilityNational}
            status="active"
            strokeColor="#FFBB28"
          />
        </div>
        <div>
          <h2>Philippine National Police (PNP) Entrance Eligibility</h2>
          <Progress
            percent={EligibilityPhilippine}
            status="active"
            strokeColor="#FF8042"
          />
        </div>
        <div>
          <h2>Barangay Health Workers Eligibility</h2>
          <Progress
            percent={EligibilityBarangay}
            status="active"
            strokeColor="#FFBB28"
          />
        </div>
        <div>
          <h2>Career Service Professional</h2>
          <Progress
            percent={EligibilityProfessional}
            status="active"
            strokeColor="#FFBB28"
          />
        </div>
        <div>
          <h2>Career Service Sub Professional</h2>
          <Progress
            percent={EligibilitySubProfessional}
            status="active"
            strokeColor="#FFBB28"
          />
        </div>
        <div>
          <h2> Honor Graduate Eligibility</h2>
          <Progress
            percent={EligibilityHonor}
            status="active"
            strokeColor="#FFBB28"
          />
        </div>
        <div>
          <h2>Industrial Safety and Health Eligibility</h2>
          <Progress
            percent={EligibilityIndustrial}
            status="active"
            strokeColor="#FFBB28"
          />
        </div>
        <div>
          <h2> Philippine Veterans Affairs Office (PVAO) Eligibility</h2>
          <Progress
            percent={EligibilityPVAO}
            status="active"
            strokeColor="#FFBB28"
          />
        </div>
        <div>
          <h2>Fire Officer Eligibility</h2>
          <Progress
            percent={EligibilityFire}
            status="active"
            strokeColor="#FFBB28"
          />
        </div>
        <div>
          <h2> Licensed Professional Teacher Eligibility</h2>
          <Progress
            percent={EligibilityLicensed}
            status="active"
            strokeColor="#FFBB28"
          />
        </div>
      </div>
      <button
        className="absolute top-2 right-2 text-gray-500"
        onClick={closeModal}
      >
        <FaTimes fontSize={20} />
      </button>
    </div>
  );

  return (
    <div className="pt-[25px] px-[25px] bg-black">
      <div className="flex items-center justify-between">
        <h1 className="text-zinc-300 text-[28px] leading-[34px] font-normal cursor-pointer w-auto">
          Dashboard
        </h1>
        {/* <button className="bg-green-700 h-[32px] rounded-[3px] text-white flex items-center justify-center px-[15px] cursor-pointer">
          Generate Report
        </button> */}
      </div>
      <div className="grid grid-cols-4 gap-[10px] mt-[25px] pb-[15px] h-24">
        <div className="rounded-lg bg-[#00C49F] flex flex-col border border-[#b63d95c4] w-auto mt-2 cursor-pointer hover:shadow-lg transform hover:scale-103 transition duration-300 ease-out">
          <div className="w-full items-center justify-between">
            <h2 className="text-purple-700 text-xs sm:font-size-[5px] md:text-lg lg:text-xl xl:text-2xl leading-[17px] font-bold text-center">
              ALUMNI
            </h2>
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-[24px] font-bold text-zinc-600 text-center mt-2 sm:mt-0">
              {alumnidata.length}
            </h3>
          </div>
          <div className="self-end pr-2 sm:self-end sm:pb-2 w-auto">
            <FaUserGraduate fontSize={25} color="#b63d95c4" />
          </div>
        </div>
        <div
          className="rounded-lg bg-[#0088FE] flex flex-col border border-[#b63d95c4] w-auto mt-2 cursor-pointer hover:shadow-lg transform hover:scale-103 transition duration-300 ease-out"
          onClick={() => openModal(positionStatusContent)}
        >
          <div className="w-full items-center justify-between">
            <h2 className="text-purple-700 text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl leading-[17px] font-bold text-center">
              EMPLOYED
            </h2>
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-[24px] font-bold text-zinc-600 text-center mt-2 sm:mt-0">
              {AlumniEmployed}
            </h3>
          </div>
          <div className="self-end pr-2 sm:self-end sm:pb-2 w-auto">
            <MdWork fontSize={28} color="#b63d95c4" />
          </div>
        </div>
        <div className="rounded-lg bg-[#FFBB28] flex flex-col border border-[#b63d95c4] w-auto mt-2 cursor-pointer hover:shadow-lg transform hover:scale-103 transition duration-300 ease-out">
          <div className="w-full items-center justify-between">
            <h2 className="text-purple-700 text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl leading-[17px] font-bold text-center">
              UNEMPLOYED
            </h2>
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-[24px] font-bold text-zinc-600 text-center mt-2 sm:mt-0">
              {AlumniUnemployed}
            </h3>
          </div>
          <div className="self-end pr-2 sm:self-end sm:pb-2 w-auto">
            <MdWorkOff fontSize={28} color="#b63d95c4" />
          </div>
        </div>
        <div
          className="rounded-lg bg-[#FF8042] flex flex-col border border-[#b63d95c4] w-auto mt-2 cursor-pointer hover:shadow-lg transform hover:scale-103 transition duration-300 ease-out"
          onClick={() => openModal(eligibilityStatusContent)}
        >
          <div className="w-full items-center justify-between">
            <h2 className="text-purple-700 text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl leading-[17px] font-bold text-center">
              ELIGIBILITY
            </h2>
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-[24px] font-bold text-zinc-600 text-center mt-2 sm:mt-0">
              {AlumniEligibility}
            </h3>
          </div>
          <div className="self-end pr-2 sm:self-end sm:pb-2 w-auto">
            <BsBuildingCheck fontSize={28} color="#b63d95c4" />
          </div>
        </div>
      </div>
      <div className="flex mt-[22px] w-full gap-[40px]">
        <div className="basis-[70%] border bg-white shadow-md cursor-pointer rounded-[4px] w-auto">
          <div className="bg-zinc-100 flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-zinc-200 mb-[20px]">
            <h2 className="text-green-700 text-[16px] leading-[19px] font-bold">
              Total Graduates per Academic Year
            </h2>
            <FaEllipsisV color="gray" className="cursor-pointer" />
          </div>
          <div>
            <LineChart
              width={600}
              height={400}
              data={data}
              margin={{
                top: 10,
                right: 10,
                left: 10,
                // bottom: 10,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              {/* <Line
                type="monotone"
                // dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 6 }}
              /> */}
              <Line type="monotone" dataKey="Graduates" stroke="#82ca9d" />
            </LineChart>
            <p className="text-black/180 text-center text-sm justify-center mt-4 ">
              Total Graduates: 324{" "}
            </p>
          </div>
        </div>
        <div className="basis-[30%] border bg-white shadow-md cursor-pointer rounded-[4px] w-auto">
          <div className="bg-zinc-100 flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-zinc-200  mb-[20px] ">
            <h2 className="text-green-700 text-[16px] leading-[19px] font-bold">
              Employment Rate
            </h2>
            <FaEllipsisV color="gray" className="cursor-pointer" />
          </div>
          <div className="pl-[35px]">
            <PieComponent />
          </div>
        </div>
      </div>
      <div className="flex mt-[22px] w-full gap-[30px]">
        {/* <div className="basis-[45%] border bg-white shadow-md cursor-pointer rounded-[4px] w-auto">
          <div className="bg-zinc-100 flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-zinc-200">
            <h2 className="text-green-700 text-[16px] leading-[19px] font-bold">
              Bar Graph
            </h2>
            <FaEllipsisV color="gray" className="cursor-pointer" />
          </div>
          <div className="pl-[35px]">
            <BarComponent />
          </div>
        </div> */}
      </div>
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg">
            <button
              className="absolute top-2 right-2 text-gray-500"
              onClick={closeModal}
            >
              <FaTimes fontSize={20} />
            </button>
            {modalContent}
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
