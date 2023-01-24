import React from "react";
import Login from "../Components/Login";
import RegisterImg from "../Components/RegisterImg";
import Reg1 from "../Components/Registration/Reg1";
import SiginIn from "../Components/SiginIn";

const SignIn = () => {
  return (
    <>
      <RegisterImg>
        <div  className="mt-10">
          <Login />
        </div>
      </RegisterImg>
    </>
  );
};

export default SignIn;
