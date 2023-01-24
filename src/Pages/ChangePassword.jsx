import React from "react";
import RegisterImg from "../Components/RegisterImg";
import ChangePass from "../Components/ChangePassword/ChangePass";


const ChangePassword = () => {
  return (
    <>
      <RegisterImg>
        <div  className="mt-10">
          <ChangePass />
        </div>
      </RegisterImg>
    </>
  );
};

export default ChangePassword;
