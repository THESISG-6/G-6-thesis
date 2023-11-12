import React from "react";
import Sidebar from "../components/Sidebar";
import Dashboardview from "../components/Dashboardview";

const Logs = () => {
  return (
    <div className="flex">
      <div className="basis-[12%] h-[100vh] border">
        <Sidebar />
      </div>
      <div className="basis-[88%] border h-[100vh] overflow-scroll">
        <Dashboardview />
        <div className="flex-grow bg-gray-300 p-5 rounded-md container mx-auto overflow-x-auto h-full">
          <h3 className="text-2xl font-bold mb-3">Logs</h3>

          {/* Search Bar */}
          <div className="container mx-auto w-auto flex justify-between items-center">
            <div className="inline-block">
              <input
                type="text"
                className="bg-zinc-100 h-10  outline-none pl-4 w-[70px] sm:w-64 rounded-full sm:rounded-[5px] placeholder:text-[14px] leading-[20px] font-normal ml-2"
                placeholder="Search for..."
              />

              {/* <AiOutlineSearch /> */}
            </div>
          </div>

          <div className="container mx-auto p-4 overflow-y-scroll h-full w-full md:overflow-x-auto overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left font-medium">ID</th>
                  <th className="px-6 py-3 text-left font-medium">Alumni </th>
                  <th className="px-6 py-3 text-left font-medium">Time</th>
                  <th className="px-6 py-3 text-left font-medium">Date</th>
                  <th className="px-6 py-3 text-left font-medium">Action</th>
                  <th className="px-6 py-3 text-left font-medium">
                    Description
                  </th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logs;
