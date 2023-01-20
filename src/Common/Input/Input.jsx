import React from "react";

const Input = ({ label, placeholder}) => {
  return (
    <div className="my-6">
      <label className="block text-blue font-semibold text-[18px]">
        {label}
      </label>
      <input
        placeholder={placeholder}
        type="email"
        className="border-2 w-full text-[18px] border-[black] outline-2 outline-primary px-4 py-3 mt-3 rounded-md"
      />
    </div>
  );
};

export default Input;
