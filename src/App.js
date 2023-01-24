import React from "react";
import { DatePicker } from "antd";
import { Routes, Route } from 'react-router-dom'
import Registration from "./Pages/Registration";
import CreateAccount from "./Pages/CreateAccount";
import Curriculum from "./Pages/Curriculum";
import ResoContent from "./Components/Curriculum/ResoContent";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={ <Registration /> } />
        <Route path="registration" element={ <CreateAccount /> } />
        <Route path="curriculum" element={ <Curriculum /> } />
       
      </Routes>
    </div>
  );
};

export default App;
