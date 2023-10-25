import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { FaEllipsisV, FaUserGraduate } from "react-icons/fa";
import { MdWorkOff, MdWork } from "react-icons/md";
import { BsBuildingCheck } from "react-icons/bs";
import PieComponent from "./PieComponent";
import { Progress } from "antd";
import BarComponent from "./BarComponent";

const data = [
  {
    name: "2015-2016",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "2016-2017",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "2017-2018",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "2018-2019",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "2019-2020",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "2021-2022",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "2022-2023",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Main = () => {
  return (
    <div className="pt-[25px] px-[25px] bg-black">
      <div className="flex items-center justify-between">
        <h1 className=" text-zinc-300 text-[28px] leading-[34px] font-normal cursor-pointer w-auto">
          Dashboard
        </h1>
        <button className="bg-green-700 h-[32px] rounded-[3px] text-white flex items-center justify-center px-[15px] cursor-pointer">
          Generate Report
        </button>
      </div>
      <div className="grid grid-cols-4 gap-[10px] mt-[25px] pb-[15px] h-24">
        <div className="rounded-lg bg-[#00C49F] flex flex-col border border-[#b63d95c4] w-auto mt-2 cursor-pointer hover:shadow-lg transform hover:scale-103 transition duration-300 ease-out">
          <div className="w-full items-center justify-between">
            <h2 className="text-purple-700 text-xs sm:font-size-[5px]  md:text-lg lg:text-xl xl:text-2xl leading-[17px] font-bold text-center">
              ALUMNI
            </h2>
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-[24px] font-bold text-zinc-600 text-center mt-2 sm:mt-0">
              500
            </h3>
          </div>
          <div className="self-end pr-2 sm:self-end sm:pb-2 w-auto">
            <FaUserGraduate fontSize={25} color="#b63d95c4" />
          </div>
        </div>

        <div className="rounded-lg bg-[#0088FE] flex flex-col border border-[#b63d95c4] w-auto mt-2 cursor-pointer hover:shadow-lg transform hover:scale-103 transition duration-300 ease-out">
          <div className="w-full items-center justify-between">
            <h2 className="text-purple-700 text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl leading-[17px] font-bold text-center">
              EMPLOYED
            </h2>
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-[24px] font-bold text-zinc-600 text-center mt-2 sm:mt-0">
              500
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
              500
            </h3>
          </div>
          <div className="self-end pr-2 sm:self-end sm:pb-2 w-auto">
            <MdWorkOff fontSize={28} color="#b63d95c4" />
          </div>
        </div>

        <div className="rounded-lg bg-[#FF8042] flex flex-col border border-[#b63d95c4] w-auto mt-2 cursor-pointer hover:shadow-lg transform hover:scale-103 transition duration-300 ease-out">
          <div className="w-full items-center justify-between">
            <h2 className="text-purple-700 text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl leading-[17px] font-bold text-center">
              ELIGIBILITY
            </h2>
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-[24px] font-bold text-zinc-600 text-center mt-2 sm:mt-0">
              500
            </h3>
          </div>
          <div className="self-end pr-2 sm:self-end sm:pb-2 w-auto">
            <BsBuildingCheck fontSize={28} color="#b63d95c4" />
          </div>
        </div>
      </div>

      <div className="flex mt-[22px] w-full gap-[30px]">
        <div className="basis-[70%] border bg-white shadow-md cursor-pointer rounded-[4px] w-auto">
          <div className="bg-zinc-100 flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-zinc-200 mb-[20px]">
            <h2 className="text-green-700 text-[16px] leading-[19px] font-bold">
              Line Chart
            </h2>
            <FaEllipsisV color="gray" className="cursor-pointer" />
          </div>
          <div>
            <LineChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 10, // Adjusted for better spacing on small screens
                right: 10, // Adjusted for better spacing on small screens
                left: 10, // Adjusted for better spacing on small screens
                bottom: 30, // Adjusted for better spacing on small screens
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 6 }} // Reduced active dot size for small screens
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </div>
        </div>
        <div className="basis-[30%] border bg-white shadow-md cursor-pointer rounded-[4px] w-auto">
          <div className="bg-zinc-100 flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-zinc-200  mb-[20px] ">
            <h2 className="text-green-700 text-[16px] leading-[19px] font-bold">
              Pie Graph
            </h2>
            <FaEllipsisV color="gray" className="cursor-pointer" />
          </div>
          <div className="pl-[35px]">
            <PieComponent />
          </div>
        </div>
      </div>
      <div className="flex mt-[22px] w-full gap-[30px]">
        <div className="basis-[55%] border bg-white shadow-md cursor-pointer rounded-[4px]">
          <div className="bg-zinc-100 flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-zinc-200">
            <h2 className="text-green-700 text-[16px] leading-[19px] font-bold">
              Progress Graph
            </h2>
            <FaEllipsisV color="gray" className="cursor-pointer" />
          </div>
          <div className="px-[25px] space-y-[15px] py-[15px]">
            <div>
              <h2>Alumni </h2>
              <Progress percent={40} status="active" strokeColor="#00C49F" />
            </div>
          </div>
          <div className="px-[25px] space-y-[15px] py-[15px]">
            <div>
              <h2>Employed </h2>
              <Progress percent={24} status="active" strokeColor="#0088FE" />
            </div>
          </div>
          <div className="px-[25px] space-y-[15px] py-[15px]">
            <div>
              <h2>Unemployed </h2>
              <Progress percent={16} status="active" strokeColor="#FFBB28" />
            </div>
          </div>
          <div className="px-[25px] space-y-[15px] py-[15px]">
            <div>
              <h2>Eligibility </h2>
              <Progress percent={20} status="active" strokeColor="#FF8042" />
            </div>
          </div>
        </div>

        <div className="basis-[45%] border bg-white shadow-md cursor-pointer rounded-[4px]">
          <div className="bg-zinc-100 flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-zinc-200">
            <h2 className="text-green-700 text-[16px] leading-[19px] font-bold">
              Bar Graph
            </h2>
            <FaEllipsisV color="gray" className="cursor-pointer" />
          </div>
          <div className="pl-[35px]">
            <BarComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
