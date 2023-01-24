import React from "react";
import { Link } from "react-router-dom";

const ResetSuccess = () => {
  return (
    <div className="mt-10 w-[90%] tablet:w-[80%]">
      <p className="font-[700] text-[28px] mb-12 leading-[110%] ">
        An email has been sent to oluchi@gmail.com
      </p>

      <p className="my-4">Click the button below to open your email</p>

      <Link to="/login" className="w-fit">
        <button className="text-[16px] my-3 rounded-lg text-white py-2 px-4 bg-primary">
        Open email
        </button>
      </Link>
    </div>
  );
};

export default ResetSuccess;
