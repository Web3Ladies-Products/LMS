import React from "react";
import { DatePicker } from "antd";
import { Routes, Route } from 'react-router-dom'
import Registration from "./Pages/Registration";

const App = () => {
  return (
    <div className="text-center">
      <h1>App</h1>
      <Routes>
        <Route path="/" element={ <Registration /> } />
        {/* <Route path="about" element={ <About/> } /> */}
        {/* <Routes path="contact" element={ <Contact/> } /> */}
      </Routes>
      <DatePicker />
    </div>
  );
};

export default App;
