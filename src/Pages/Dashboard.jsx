import React from "react";
import { Navbar, PageHoc, Sidebar } from "../Components";

const Dashboard = () => {
  return (
    <div className="w-full">
      <h1>Dashboard</h1>
    </div>
  );
};

export default PageHoc(Dashboard);
