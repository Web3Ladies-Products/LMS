import React from "react";

import { Routes, Route } from "react-router-dom";
import Registration from "./Pages/Registration";
import CreateAccount from "./Pages/CreateAccount";
import Curriculum from "./Pages/Curriculum";
import ResoContent from "./Components/Curriculum/ResoContent";
import { Classroom, Dashboard, Grades, Project } from "./Pages";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="registration" element={<CreateAccount />} />

        <Route path="dashboard" element={<Dashboard />} />
        <Route path="projects" element={<Project />} />
        <Route path="grades" element={<Grades />} />
        <Route path="classroom" element={<Classroom />} />
        <Route path="curriculum" element={<Curriculum />} />
      </Routes>
    </div>
  );
};

export default App;
