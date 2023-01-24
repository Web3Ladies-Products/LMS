import React, { useState } from "react";
import {
  AssignmentCard,
  Navbar,
  PageHoc,
  Sidebar,
  TotalPointCard,
  TracksCard,
} from "../Components";
import { IoMdClose } from "react-icons/io";
import { tracksImage } from "../assets";

const tracksData = [
  {
    id: 1,
    trackImage: tracksImage,
    track: "Product Management",
    cohort: "III",
    progress: "60%",
    status: "Incomplete",
  },
  {
    id: 2,
    trackImage: tracksImage,
    track: "Product Management",
    cohort: "II",
    progress: "100%",
    status: "Completed",
  },
  {
    id: 3,
    trackImage: tracksImage,
    track: "Web Development",
    cohort: "I",
    progress: "24%",
    status: "Evited",
  },
];

const assignmentData = [
  {
    id: 1,
    title:
      "Write a detailed PRD for the product you reseached in the last assignment",
    status: "New",
    url: "#",
    hasSubmitted: false,
  },
  {
    id: 2,
    title:
      "Write a detailed PRD for the product you reseached in the last assignment",
    status: "New",
    url: "#",
    hasSubmitted: false,
  },
  {
    id: 3,
    title:
      "Write a detailed PRD for the product you reseached in the last assignment",
    status: "Pending",
    url: "#",
    hasSubmitted: false,
  },
  {
    id: 4,
    title:
      "Write a detailed PRD for the product you reseached in the last assignment",
    status: "Completed",
    url: "#",
    hasSubmitted: true,
  },
  {
    id: 5,
    title:
      "Write a detailed PRD for the product you reseached in the last assignment",
    status: "Completed",
    url: "#",
    hasSubmitted: true,
  },
  {
    id: 6,
    title:
      "Write a detailed PRD for the product you reseached in the last assignment",
    status: "Completed",
    url: "#",
    hasSubmitted: true,
  },
];
const Dashboard = () => {
  const [active, setActive] = useState("all");
  const [assignment, setAssignment] = useState(assignmentData);
  return (
    <div className="w-full  ">
      <h1 className="text-2xl mb-6 font-bold">Dashboard</h1>
      <div className=" max-w-[1143px]  text-white bg-[#1A1A1A] px-[9px] py-2 sm:py-5 rounded-[8px] flex flex-col md:flex-row justify-between gap-2 md:items-center">
        <div>
          <p>Welcome to Week 3!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="flex justify-between items-center gap-6">
          <button className="rounded px-8 py-[14px] border-2 border-white">
            Go to class
          </button>
          <IoMdClose className="text-[#858585] cursor-pointer" />
        </div>
      </div>
      <div className="mt-[30px] flex gap-12 flex-wrap">
        <TotalPointCard point="1200" />
        <TotalPointCard point="1200" />
        <TotalPointCard point="1200" />
        <TotalPointCard point="1200" />
      </div>
      <div className="mt-12">
        <h3 className="font-bold text-5">My Track</h3>
        <div className="flex gap-5">
          {tracksData.map((val) => (
            <TracksCard
              trackImage={val.trackImage}
              track={val.track}
              cohort={val.cohort}
              progress={val.progress}
              status={val.status}
            />
          ))}
        </div>
      </div>
      <div className="mt-[52px]">
        <h3 className="font-bold text-5">Assignments</h3>
        <div className="flex bg-white mb-[2px] gap-5 py-4 px-6">
          <button
            className={`${
              active === "all" ? "bg-[#7D0BFE] text-white" : "text-[#AAA3B1]"
            } py-[7px] px-6  rounded-[50px] `}
            onClick={() => {
              setActive("all");
              setAssignment(assignmentData);
            }}
          >
            All
          </button>
          <button
            className={`${
              active === "new" ? "bg-[#7D0BFE] text-white" : "text-[#AAA3B1]"
            } py-[7px] px-6  rounded-[50px] `}
            onClick={() => {
              setActive("new");
              setAssignment(
                assignmentData.filter((data) => data.status === "New")
              );
            }}
          >
            New
          </button>
          <button
            className={`${
              active === "pending"
                ? "bg-[#7D0BFE] text-white"
                : "text-[#AAA3B1]"
            } py-[7px] px-6  rounded-[50px] `}
            onClick={() => {
              setActive("pending");
              setAssignment(
                assignmentData.filter((data) => data.status === "Pending")
              );
            }}
          >
            Pending
          </button>
          <button
            className={`${
              active === "completed"
                ? "bg-[#7D0BFE] text-white"
                : "text-[#AAA3B1]"
            } py-[7px] px-6  rounded-[50px] `}
            onClick={() => {
              setActive("completed");
              setAssignment(
                assignmentData.filter((data) => data.status === "Completed")
              );
            }}
          >
            Completed
          </button>
        </div>
        <div className="flex gap-[1px] flex-col">
          {assignment.map((val) => (
            <AssignmentCard
              title={val.title}
              status={val.status}
              url={val.url}
              hasSubmitted={val.hasSubmitted}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageHoc(Dashboard);
