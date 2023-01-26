import React from "react";
import { PageHoc } from "../Components";
import { cohortImage } from "../assets";

const CohortClass = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold">Classess</h3>
      <div className="mt-8 max-w-[962px] bg-white h-full p-6">
        <img src={cohortImage} className="object-contain" alt="cohort" />
        <p className="text-black text-xl ">Product Management</p>
        <p className="mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mi
          bibendum lacus, mi mus sed massa. Elementum tincidunt adipiscing est
          ornare a morbi id.
        </p>
        <div className="mt-4 flex md:items-center flex-col md:flex-row gap-[14px] w-full">
          <div className="flex items-center gap-[14px]">
            <p className="text-[#858585] text-[9px]">STATUS</p>
            <p
              className={` rounded text-white px-[6px] py-1  ${
                "Incomplete" === "Completed" ? "bg-[#7D0BFE]" : "bg-[#FF5F2D]"
              } text-[10px]`}
            >
              Incomplete
            </p>
          </div>
          <div className="flex justify-between w-full gap-3 items-center">
            <p className="text-[#858585] text-[9px]">PROGRESS</p>
            <div className="w-full bg-gray-200 h-1">
              <div className="bg-[#7D0BFE] h-1" style={{ width: "60%" }}></div>
            </div>
            <p className="text-[#7D0BFE] font-bold">60%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHoc(CohortClass);
