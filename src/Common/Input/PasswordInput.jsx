import React from "react";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
const PasswordInput = ({ label, placeholder}) => {
  return (
    <div className="my-6">
      <label className="block text-blue font-semibold text-[18px]">
        {label}
      </label>
      <div className="relative w-full">
        <input
            placeholder={placeholder}
            type="password"
            className="border-2 w-full text-[18px] border-[black] outline-2 outline-primary px-4 py-3 mt-3 rounded-md"
        />
        <div className="absolute right-3 top-6">
            <AiOutlineEye className="h-[30px] w-[30px]" />
        </div>

      </div>
    </div>
  );
};

export default PasswordInput;

