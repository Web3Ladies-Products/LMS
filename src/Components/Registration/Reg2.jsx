import React from "react";
import Input from "../../Common/Input/Input";


 

const Reg2 = ({ regFormData, setRegFormData }) => {
  return (
    <div className="w-[90%] mb-5">
    <p className="text-[18px] mb-16">Enter your information below to create an account</p>
    <Input 
      label="Slack username" 
      type="text" 
      placeholder="Blockchain Development"
      value={regFormData.slackUserName}
      onChange={(e) => setRegFormData({...regFormData, slackUserName: e.target.value})}
    />
      <label className="block text-blue font-semibold text-[16px]">
        Track
      </label>
      <select
        value={regFormData.track}
        onChange={(e) => setRegFormData({...regFormData, track: e.target.value})}
        className="w-full outine-[1.5px] outline-primary border-[1.5px] border-[black] p-2 rounded-sm mt-1" 
      >
        <option value="Blockchain Development">Blockchain Development</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
      </select>
  </div>
  )
}

export default Reg2