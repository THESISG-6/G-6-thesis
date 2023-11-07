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
      </div>
    </div>
  );
};

export default Logs;
