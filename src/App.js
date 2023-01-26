import React from "react";

import { Routes, Route } from "react-router-dom";
import Registration from "./Pages/Registration";
import CreateAccount from "./Pages/CreateAccount";
import Curriculum from "./Pages/Curriculum";
import SignIn from "./Pages/Signin";
import ChangePassword from "./Pages/ChangePassword";
import ChangePassSuccess from "./Pages/ChangePassSuccess";
import RestPassword from "./Pages/ResetPassword";
import ResetPassSuccess from "./Pages/ResetPassSuccess";
import { Classroom, CohortClass, Dashboard, Grades, Project } from "./Pages";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="registration" element={<CreateAccount />} />
        <Route path="login" element={<SignIn />} />
        <Route path="changepassword" element={<ChangePassword />} />
        <Route path="passwordchanged" element={<ChangePassSuccess />} />
        <Route path="curriculum" element={<Curriculum />} />
        <Route path="resetpassword" element={<RestPassword />} />
        <Route path="paswordsuccess" element={<ResetPassSuccess />} />
        <Route path="/" element={<Registration />} />
        <Route path="registration" element={<CreateAccount />} />

        <Route path="dashboard" element={<Dashboard />} />
        <Route path="projects" element={<Project />} />
        <Route path="grades" element={<Grades />} />
        <Route path="classroom" element={<Classroom />} />
        <Route path="curriculum" element={<Curriculum />} />
        <Route path="cohort/:cohortId" element={<CohortClass />} />
      </Routes>
    </div>
  );
};

export default App;
