import React from "react";
import { DatePicker } from "antd";
import { Routes, Route } from 'react-router-dom'
import Registration from "./Pages/Registration";
import CreateAccount from "./Pages/CreateAccount";
import Curriculum from "./Pages/Curriculum";
import SignIn from "./Pages/Signin";
import ChangePassword from "./Pages/ChangePassword";
import ChangePassSuccess from "./Pages/ChangePassSuccess";
import RestPassword from "./Pages/ResetPassword";
import ResetPassSuccess from "./Pages/ResetPassSuccess";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={ <Registration /> } />
        <Route path="registration" element={ <CreateAccount /> } />
        <Route path="login" element={ <SignIn /> } />
        <Route path="changepassword" element={ <ChangePassword /> } />
        <Route path="passwordchanged" element={ <ChangePassSuccess /> } />
        <Route path="curriculum" element={ <Curriculum /> } />
        <Route path="resetpassword" element={ <RestPassword /> } />
        <Route path="paswordsuccess" element={ <ResetPassSuccess /> } />
      </Routes>
    </div>
  );
};

export default App;
