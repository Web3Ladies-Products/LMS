import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const PageHoc = (WrappedComponent) => {
  return function (props) {
    return (
      <div className="flex">
        <div className="w-[261px]">
          <Sidebar />
        </div>
        <div className="w-full">
          <Navbar />
          <WrappedComponent {...props} />
        </div>
      </div>
    );
  };
};

export default PageHoc;
