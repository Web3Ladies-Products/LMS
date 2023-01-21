import React from "react";
import Input from "../../Common/Input/Input";

import { Select, Option } from "@material-tailwind/react";
 

const Reg2 = () => {
  return (
    <div className="w-[90%] mb-5">
    <p className="text-[18px] mb-16">Enter your information below to create an account</p>
    <Input label="Slack username" type="text" placeholder="Blockchain Development"/>

      <select className="w-full outine-[1.5px] outline-primary border-[1.5px] border-[black] p-2 rounded-sm mt-4" >
        <option>Blockchain Development</option>
        <option>Frontend</option>
        <option>Backend</option>
      </select>
  </div>
  )
}

export default Reg2