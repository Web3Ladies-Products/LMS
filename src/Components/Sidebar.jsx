import { BsSlack, BsPlayBtn, BsStar } from "react-icons/bs";
import { BiRocket } from "react-icons/bi";
import { MdOutlineDashboard } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import { useState } from "react";
import { logo } from "../assets";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [active, setActive] = useState("Dashboard");
  const navigate = useNavigate();
  let location = useLocation();

  return (
    <aside className=" px-4 border-r-[1px] h-screen border-[rgba(0, 0, 0, 0.2)] p-2">
      <div className="text-[#858585] mb-16 text-center py-2">
        <img src={logo} alt="Logo" />
      </div>
      <nav>
        <ul className="flex flex-col border-b-[1px] border-[rgba(0, 0, 0, 0.2)]">
          <li
            className={`text-[#858585]  py-[17px] flex items-center rounded cursor-pointer px-4 ${
              location.pathname === "/dashboard"
                ? "bg-[#F8F2FF] text-[#7D0BFE]"
                : ""
            }`}
            onClick={() => {
              setActive("Dashboard");
              navigate("/dashboard");
            }}
          >
            <MdOutlineDashboard size={24} className="mr-2" /> Dashboard
          </li>
          <li
            className={`text-[#858585] flex items-center rounded cursor-pointer py-[17px] px-4 ${
              location.pathname === "/projects"
                ? "bg-[#F8F2FF] text-[#7D0BFE]"
                : ""
            }`}
            onClick={() => {
              setActive("Projects");
              navigate("/projects");
            }}
          >
            <BiRocket size={24} className="mr-2" /> Projects
          </li>
          <li
            className={`text-[#858585] flex items-center rounded cursor-pointer py-[17px] px-4 ${
              location.pathname === "/grades"
                ? "bg-[#F8F2FF] text-[#7D0BFE]"
                : ""
            }`}
            onClick={() => {
              setActive("Grades");
              navigate("/grades");
            }}
          >
            <BsStar size={24} className="mr-2" /> Grades
          </li>
          <li
            className={`text-[#858585] mb-4 flex items-center rounded cursor-pointer py-[17px] px-4 ${
              location.pathname === "/classroom"
                ? "bg-[#F8F2FF] text-[#7D0BFE]"
                : ""
            }`}
            onClick={() => {
              setActive("Classroom");
              navigate("/classroom");
            }}
          >
            <BsPlayBtn size={24} className="mr-2" /> Classroom
            <button className="ml-auto">
              <i className="fas fa-caret-down" />
            </button>
          </li>
        </ul>

        <ul className="flex mt-4 flex-col">
          <li
            className={` py-[17px] flex items-center rounded cursor-pointer px-4 text-[#7D0BFE]`}
            onClick={() => {}}
          >
            <BsSlack size={24} className="mr-2" /> Go to slack
          </li>
          <li
            className={`text-[#858585] flex items-center rounded cursor-pointer py-[17px] px-4 `}
            onClick={() => {}}
          >
            <HiOutlineLogout size={24} className="mr-2" /> Logout
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
