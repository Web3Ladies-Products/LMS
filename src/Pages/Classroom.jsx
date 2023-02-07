import React from "react";
import { PageHoc } from "../Components";
import Curriculum from "../Components/Curriculum/Curriculum";

const Classroom = () => {
  return <Curriculum/>;
};

export default PageHoc(Classroom);
