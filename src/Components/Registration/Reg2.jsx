import React from "react";
import Input from "../../Common/Input/Input";
import PasswordInput from "../../Common/Input/PasswordInput";

import { BiRightArrowAlt } from 'react-icons/bi'

import { Progress } from 'antd';

const Reg2 = () => {
  return (
    <div>
    <p className="text-[18px] mb-8">Enter your information below to create an account</p>
    {/* <form > */}
      <Input label="Email" placeholder="name@example.com"/>
      <Input label="Full name" placeholder="name@example.com"/>
      <PasswordInput label="Password" placeholder="Password"/>
      {/* <div className="flex justify-between -mt-3 w-full mobile_l:w-[80%] font-semibold text-[18px] text-hash" >
          <p>Password strength</p>
          <div className="flex gap-2 items-center">
              <p>Strong!</p>
              <Progress className="w-[100px] my-auto" percent={50} size="small" showInfo={false} />
          </div>
      </div> */}

      <button className='flex gap-3 items-center justify-center text-[20px] my-3 rounded-lg text-white p-3 w-full bg-primary'>
          Continue
          <BiRightArrowAlt />
      </button>
    {/* </form> */}
  </div>
  )
}

export default Reg2