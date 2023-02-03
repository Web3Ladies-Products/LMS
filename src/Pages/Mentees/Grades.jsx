import React from "react";
import { GradesTable, PageHoc } from "../../Components";


const Grades = () => {
  return( 
    <div>
      <div className="px-4 tablet:px-10 py-16">
        <p className="text-[24px] font-[700]">Grades</p>
        <div className="mt-8 w-full laptop:w-[90%] max-w-900px]">
          <GradesTable />
        </div>
      </div>
    </div>);
};

export default PageHoc(Grades);
