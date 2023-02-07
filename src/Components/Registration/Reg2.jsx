import React from "react";
import Input from "../../Common/Input/Input";
import Select from "../../Common/Select/Select";


const options = [ "Blockchain Development", "Frontend", "Backend" ]
 

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
      
      <Select label="Track" option={options} />
  </div>
  )
}

export default Reg2