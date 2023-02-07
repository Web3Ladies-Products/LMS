import React from "react";
import { PageHoc } from "../Components";
import SettingsTab from "../Components/Settings/SettingsTab";


const Settings = () => {
  return( 
    <div>
      <div className="px-4 tablet:px-10 py-16">
        <p className="text-[24px] font-[700]">Settings</p>
        <div className="mt-8 w-full laptop:w-[90%] max-w-900px]">
            <SettingsTab />
        </div>
      </div>
    </div>);
};

export default PageHoc(Settings);
