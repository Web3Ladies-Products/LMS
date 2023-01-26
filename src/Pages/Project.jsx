import React from "react";
import { PageHoc } from "../Components";

const Project = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold">Projects</h3>
      <div className="mt-8 w-full bg-white min-h-[575px]"></div>
    </div>
  );
};

export default PageHoc(Project);
