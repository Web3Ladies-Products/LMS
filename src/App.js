import React from "react";
import { DatePicker } from "antd";
import { Routes, Route } from 'react-router-dom'
import Registration from "./Pages/Registration";
import CreateAccount from "./Pages/CreateAccount";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={ <Registration /> } />
        <Route path="registration" element={ <CreateAccount /> } />
        {/* <Routes path="contact" element={ <Contact/> } /> */}
      </Routes>
    </div>
  );
};

export default App;
