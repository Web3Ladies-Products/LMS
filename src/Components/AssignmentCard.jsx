import React from "react";
import { Link } from "react-router-dom";

const AssignmentCard = ({ title, status, url, hasSubmitted }) => {
  return (
    <div className="px-6 bg-white py-4 gap-4 md:gap-20 lg:gap-40 flex items-center">
      <div className="flex items-center gap-2">
        <span className="bg-[#F3E9FE] rounded-full w-[6px] h-[6px]"></span>
        <p>{title}</p>
      </div>
      <p
        className={`px-[6px] py-1 ${
          status === "New"
            ? "text-[#3EB876] bg-[#ECF8F2] border-[rgba(62, 184, 118, 0.2)]"
            : status === "Pending"
            ? "text-[#FF5F2D] bg-[#FFF2EA] border-[rgba(255, 95, 45, 0.2)]"
            : "text-[#7D0BFE] bg-[#F2E7FF] border-[gba(125, 11, 254, 0.2)]"
        }  rounded border-[1px] `}
      >
        {status}
      </p>
      <div className="flex  items-center justify-start gap-6">
        <Link to={url} className="text-[#AAA3B1]">
          View
        </Link>
        {!hasSubmitted && <button className="text-[#7D0BFE]">Submit</button>}
      </div>
    </div>
  );
};

export default AssignmentCard;
