import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const PageHoc = (WrappedComponent) => {
  return function (props) {
    return (
      <div className="flex bg-[#fafafa]">
        <div className="w-[100px] lg:w-[261px]">
          <Sidebar />
        </div>
        <div className="w-full">
          <Navbar />
          <div className="px-10 pt-11 pb-[140px] ">
            <WrappedComponent {...props} />
          </div>
        </div>
      </div>
    );
  };
};

export default PageHoc;
