import React from "react";
import Login from "../Components/Login";
import RegisterImg from "../Components/RegisterImg";
import Reg1 from "../Components/Registration/Reg1";
import ChangePass from "../Components/ChangePassword/ChangePass";
import ChangeSucces from "../Components/ChangePassword/ChangeSucces";



const ChangePassSuccess = () => {
  return (
    <>
      <RegisterImg>
        <div  className="mt-10">
          <ChangeSucces />
        </div>
      </RegisterImg>
    </>
  );
};

export default ChangePassSuccess;
