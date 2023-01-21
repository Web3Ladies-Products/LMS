import React from "react";
import Input from "../../Common/Input/Input";
import PasswordInput from "../../Common/Input/PasswordInput";


import { Progress } from 'antd';

const Reg1 = () => {
  return (
    <div className="w-full">
      <p className="text-[18px] mb-4 font-semibold">Enter your information below to create an account</p>
      <div className="w-[90%]" >
        <Input label="Email" type="email" placeholder="name@example.com"/>
        <Input label="Full name" type="text" placeholder="name"/>
        <PasswordInput label="Password" placeholder="Password"/>
        <div className="flex justify-between -mt-3 w-full font-semibold text-[16px] text-hash" >
            <p>Password strength</p>
            <div className="flex gap-2 items-center">
                <p>Strong!</p>
                <Progress className="w-[100px] my-auto" percent={50} size="small" showInfo={false} />
            </div>
        </div>

        <div className="my-4 bg-light py-2 px-4 w-full rounded-lg">
            <div className="text-hash font-semibold">
                <div className=" text-[16px]">Password must include:</div>
                <div className="flex gap-2 items-center my-1"><div className="w-[10px] h-[10px] bg-green rounded-full "></div>Atleast 8 characters</div>
                <div className="flex gap-2 items-center my-1"><div className="w-[10px] h-[10px] bg-green rounded-full "></div>Atleast one special character e.g #(%&</div>
                <div className="flex gap-2 items-center my-1"><div className="w-[10px] h-[10px] bg-green rounded-full "></div>Atleast one number e.g 1234</div>
            </div>
        </div>
        
      </div>
    </div>
  );
};

export default Reg1;
