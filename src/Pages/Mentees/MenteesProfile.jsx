import React, { useState } from "react";
import { PageHoc } from "../../Components";
import { mentesPofileImage } from "../../assets";
import { Progress } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const status = "Safe";
const progress = "40%";
const assignmentData = [
  {
    id: 1,
    title:
      "Write a detailed PRD for the product you reseached in the last assignment",
    status: "Submited",
    url: "#",
  },
  {
    id: 2,
    title:
      "Write a detailed PRD for the product you reseached in the last assignment",
    status: "Graded",
    url: "#",
  },
  {
    id: 3,
    title:
      "Write a detailed PRD for the product you reseached in the last assignment",
    status: "Graded",
    url: "#",
  },
];
const MenteesProfile = () => {
  const [activeTab, setActiveTab] = useState("Assignment");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const tabClassName = (tabName) =>
    activeTab === tabName
      ? "border-b-2 border-purple-700 text-purple-700"
      : "border-b-2 border-transparent text-gray-500 hover:text-purple-700";
  return (
    <div className="bg-white min-h-[822px] px-8 py-[34px]">
      <img
        src={mentesPofileImage}
        className="w-[102px] h-[102px] rounded-full"
      />
      <div className="flex mt-3 flex-col">
        <h3 className="font-bold text-2xl">Oluchi Enebeli</h3>
        <p className="text-[#AAA3B1]">Product Design</p>
      </div>
      <div className="mt-[10px] max-w-[982px] flex md:gap-6 md:flex-row flex-col md:items-center ">
        <div className="flex gap-4 items-center">
          <p className="text-[#858585] text-[9px]">PROGRESS</p>
          <div className="md:min-w-[273px] w-full">
            <Progress value={20} size="xs" colorScheme="purple" />
          </div>
        </div>
        <div className="flex text-[#858585] items-center gap-4">
          <p className="text-[9px]">GRADE</p>
          <p className="">A</p>
        </div>
        <div className="flex items-center gap-6">
          <p className="text-[#858585] text-[9px]">STATUS</p>
          <p
            className={`  rounded text-white px-3 py-[6px]  ${
              status === "Safe"
                ? "text-[#3EB876] border-[1px] border-[#afdbc5]  bg-[#ECF8F2]"
                : "bg-[#FF5F2D]"
            } text-[10px]`}
          >
            {status}
          </p>
        </div>
      </div>

      <div className="flex flex-col h-full">
        <div className="flex-grow border-b border-gray-300">
          <div
            className={`cursor-pointer inline-block py-2 px-4 ${tabClassName(
              "Assignment"
            )}`}
            onClick={() => handleTabClick("Assignment")}
          >
            Assignment
          </div>
          <div
            className={`cursor-pointer inline-block py-2 px-4 ${tabClassName(
              "Projects"
            )}`}
            onClick={() => handleTabClick("Projects")}
          >
            Projects
          </div>
          <div
            className={`cursor-pointer inline-block py-2 px-4 ${tabClassName(
              "Bounty"
            )}`}
            onClick={() => handleTabClick("Bounty")}
          >
            Bounty
          </div>
        </div>
      </div>

      {activeTab === "Assignment" && (
        <>
          {assignmentData.map((assignment) => (
            <div
              key={assignment.id}
              className="px-6 w-full border-b border-[#e9e9e9] bg-white flex-col md:flex-row py-4 gap-4 justify-between  flex md:items-center"
            >
              <div className="flex items-center gap-2">
                <span className="bg-[#F3E9FE] rounded-full w-[6px] h-[6px]"></span>
                <p>{assignment.title}</p>
              </div>
              <p
                className={`px-[6px] max-w-[60px] text-[10px] py-1 ${
                  assignment.status === "Submited"
                    ? "text-[#3EB876] bg-[#ECF8F2] border-[rgba(62, 184, 118, 0.2)]"
                    : "bg-[#7D0BFE] text-white border-[gba(125, 11, 254, 0.2)]"
                }  rounded border-[1px] `}
              >
                {assignment.status}
              </p>
              <div className="flex  items-center justify-start gap-6">
                <Link to={assignment.url} className="text-[#AAA3B1]">
                  View submission
                </Link>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default PageHoc(MenteesProfile);
