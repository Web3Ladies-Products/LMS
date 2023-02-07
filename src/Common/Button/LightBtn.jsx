import React from "react";
import { Link } from "react-router-dom";

const LightBtn = ({ text, link }) => {
  return (
    <Link to={link}>
      <button className="hover:text-[black] border-2 text-[16px] rounded-lg p-3 w-full my-3 border-[black]">
        {text}
      </button>
    </Link>
  );
};

export default LightBtn;
