import React from "react";
import Sidebar from "../Components/Dashboard/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="md:flex relative min-h-screen">
      <div>
        {" "}
        <Sidebar />{" "}
      </div>
      <div className=" ml-64 flex-1">
        {" "}
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
