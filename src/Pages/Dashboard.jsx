import React from "react";
import { Navbar, PageHoc, Sidebar } from "../Components";
import Curriculum from "./Curriculum";

const Dashboard = () => {
  return (
    <div className="w-full">
   <Curriculum/>
    </div>
  );
};

export default PageHoc(Dashboard);
