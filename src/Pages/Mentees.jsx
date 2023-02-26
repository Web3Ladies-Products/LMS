import React, { useEffect, useState } from "react";
import { MenteesTable, PageHoc } from "../Components";
import {
  Input,
  InputGroup,
  InputRightElement,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Progress,
} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";
import {
  MdKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import { menteesData } from "../Data";
const Mentees = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;
  const [displayedData, setDisplayData] = useState([]);

  const handleIncrementCurrent = () => {
    let startIndex = (currentPage - 1) * itemsPerPage;
    let endIndex = startIndex + itemsPerPage;
    setDisplayData(menteesData.slice(startIndex, endIndex));
    console.log(displayedData);
  };

  const totalPages = Math.ceil(menteesData.length / itemsPerPage);

  useEffect(() => {
    handleIncrementCurrent();
  }, [menteesData, currentPage]);

  return (
    <div className="max-w-[1139px]">
      <h3 className="text-2xl font-bold">Mentees</h3>
      <div className="mt-8 flex justify-end">
        <InputGroup className="max-w-[274px] bg-white">
          <Input placeholder="Search" />
          <InputRightElement children={<CiSearch color="green.500" />} />
        </InputGroup>
      </div>
      <MenteesTable menteesTableData={displayedData} />
      <div className="w-full mt-[23px] flex justify-end">
        <div className="w-[240px] flex items-center justify-end gap-2 ">
          <p>Page</p>
          <p className="bg-[#EDEDED] rounded px-2">{currentPage}</p>
          <p>of</p>
          <p
            className={`${
              currentPage === totalPages && "bg-[#EDEDED] rounded px-2"
            }`}
          >
            {totalPages}
          </p>
          <div className="bg-white flex gap-2">
            <MdOutlineKeyboardArrowLeft
              className="cursor-pointer"
              onClick={() => {
                if (currentPage !== 1) {
                  setCurrentPage(currentPage - 1);
                }
              }}
              size={24}
            />

            <MdKeyboardArrowRight
              onClick={() => {
                if (currentPage !== totalPages) {
                  setCurrentPage(currentPage + 1);
                }
              }}
              className="cursor-pointer"
              size={24}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHoc(Mentees);
