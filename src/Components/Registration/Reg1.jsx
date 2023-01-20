import React from "react";
import Input from "../../Common/Input/Input";
import PasswordInput from "../../Common/Input/PasswordInput";

import { BiRightArrowAlt } from 'react-icons/bi'

import { Progress } from 'antd';

const Reg1 = () => {
  return (
    <div className="w-[90%]">
      <p className="text-[18px] mb-8 font-semibold">Enter your information below to create an account</p>
      <div className="w-[90%]" >
        <Input label="Email" placeholder="name@example.com"/>
        <Input label="Full name" placeholder="name@example.com"/>
        <PasswordInput label="Password" placeholder="Password"/>
        <div className="flex justify-between -mt-3 w-full  font-semibold text-[18px] text-hash" >
            <p>Password strength</p>
            <div className="flex gap-2 items-center">
                <p>Strong!</p>
                <Progress className="w-[100px] my-auto" percent={50} size="small" showInfo={false} />
            </div>
        </div>

        <div className="my-4 bg-light py-3 px-5 w-full rounded-lg">
            <div className="text-hash font-semibold">
                <div className=" text-[18px]">Password must include:</div>
                <div className="flex gap-2 items-center my-2"><div className="w-[13px] h-[13px] bg-green rounded-full "></div>Atleast 8 characters</div>
                <div className="flex gap-2 items-center my-2"><div className="w-[13px] h-[13px] bg-green rounded-full "></div>Atleast one special character e.g #(%&</div>
                <div className="flex gap-2 items-center my-2"><div className="w-[13px] h-[13px] bg-green rounded-full "></div>Atleast one number e.g 1234</div>
            </div>
        </div>
        <button className='flex gap-3 items-center justify-center text-[20px] my-3 rounded-lg text-white p-3 w-full bg-primary'>
            Continue
            <BiRightArrowAlt />
        </button>
      </div>
    </div>
  );
};

export default Reg1;
