import React, { useState } from "react";
import RegisterImg  from "../Components/RegisterImg";
import Reg1 from "../Components/Registration/Reg1";
import Reg2 from "../Components/Registration/Reg2";
import { BiRightArrowAlt } from 'react-icons/bi'
import RegSuccess from "../Components/Registration/RegSuccess";

// import SiginIn from "../Components/SiginIn";


const Registration = () => {
  const [page, setPage] = useState(0);
  const [regFormData, setRegFormData] = useState({
    email: "",
    fullName: "",
    password: "",
    slackUserName: "",
    track: "",
  });

 
  const FormDisplay = () => {
    if (page === 0) {
      return <Reg1 regFormData={regFormData} setRegFormData={setRegFormData}/>
    } else if (page === 1) {
      return <Reg2 regFormData={regFormData} setRegFormData={setRegFormData}/>
    } else {
      return <RegSuccess />
    }
  }
  return (
    <>
      <RegisterImg>
        {/* <form > */}
        <div  className="mt-7 w-[90%] ">
          {FormDisplay()}
          </div>
          <div>
          {page === 0 ? (       
          <button 
          onClick={() => {
            setPage((currentPage) => currentPage + 1);
          }}
          className='w-[82%] flex gap-3 items-center justify-center text-[16px] my-3 rounded-lg text-white p-2 bg-primary'
        >
          Continue
          <BiRightArrowAlt />
        </button>
        
          ): page === 1 ? (
            <button 
            onClick={() => {
              console.log(regFormData)
              setPage((currentPage) => currentPage + 1);
            }}
            className='w-[82%] flex gap-3 items-center justify-center text-[16px] my-3 rounded-lg text-white p-2 bg-primary'
          >
            Continue
            <BiRightArrowAlt />
          </button>
          ) : (
            <button
            className='w-[82%] flex gap-3 items-center justify-center text-[16px] my-3 rounded-lg text-white p-2 bg-primary'
          >
            Go to Email
          </button>
          )
          }
          </div>
        {/* </form> */}

      </RegisterImg>
    </>
  );
};

export default Registration;
