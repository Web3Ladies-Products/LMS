import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NavigateButton = ({ url, icon, text }) => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <li
      className={` flex items-center rounded cursor-pointer py-[17px] px-4 ${
        location.pathname === url
          ? "bg-[#F8F2FF] text-[#7D0BFE]"
          : "text-[#858585]"
      }`}
      onClick={() => {
        navigate(url);
      }}
    >
      {icon}
      <span className="hidden lg:block"> {text}</span>
    </li>
  );
};

export default NavigateButton;
