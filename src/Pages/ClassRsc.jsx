import React from "react";
import { Link } from "react-router-dom";
import { PageHoc } from "../Components";
import Curriculum from "../Components/Curriculum/Curriculum";
import { rightArrow, playIcon,arrowDown } from "../assets";

const ClassRsc = () => {
  return( 
    <div>
      <div className="flex gap-1">
        <Link to="classroom" className="text-primary flex gap-1">
          Product management
          <img src={rightArrow} alt=".." />
        </Link>
        <Link to="classroom" className="text-primary flex gap-1">
          Week 1
          <img src={rightArrow} alt=".." />
        </Link>
        <p className=" flex gap-1">What is product management</p>
      </div>

      <div className="w-full max-w-[1000px] bg-[#FFFFFF] p-5 mt-10 rounded-sm">
        <div className="flex">
          <Link className="text-primary font-[500] ml-auto">Next</Link>
        </div>
        <p className="text-[24px] font-[700] mb-4" >What is product management?</p>
        <div className="flex bg-[#F9F9F9] h-[400px]">
          <img src={playIcon} className="m-auto w-[100px] h-[100px]" alt="." />
        </div>
        <p className="flex gap-1 text-[18px] text-primary font-[500] my-3 py-5 border-b-2 border-[#858585]">
          Download
          <img src={arrowDown} alt="." />
        
        </p>
        <p className="font-semibold mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus lectus ipsum etiam velit volutpat neque nulla purus pharetra. Urna arcu, quis lectus amet semper at augue. Malesuada in orci id sed vitae, auctor adipiscing eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus lectus ipsum etiam velit volutpat neque nulla purus pharetra. Urna arcu, quis lectus amet semper at augue. Malesuada in orci id sed vitae, auctor adipiscing eget. </p>
      </div>
    </div>
  )};

export default PageHoc(ClassRsc);