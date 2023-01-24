import React from "react";
import { Link } from "react-router-dom";

const ChangeSucces = () => {
  return (
    <div className="mt-10 w-[90%] tablet:w-[80%]">
      <p className="font-[700] text-[28px] mb-12 leading-[110%] ">
        Your password has been changed successfully!
      </p>      

      <Link to="/login" className="w-fit">
      <button className='text-[16px] my-3 rounded-lg text-white py-2 px-4 bg-primary'>
          Go to login
      </button>
    </Link>
    </div>
  );
};

export default ChangeSucces;
