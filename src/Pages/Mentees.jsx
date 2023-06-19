import React, { useEffect, useState } from "react";
import { MenteesTable, PageHoc } from "../Components";
import TrackPaignation from "../Components/Tracks/TrackPagination";
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

  const [postsPerPage] = useState(8);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = menteesData.slice(indexOfFirstPost, indexOfLastPost);

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const paginateFront = () => setCurrentPage(currentPage + 1);
  const paginateBack = () => setCurrentPage(currentPage - 1);

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
      <MenteesTable menteesTableData={currentPosts} />
      <TrackPaignation
        currentPage={currentPage}
        postsPerPage={postsPerPage}
        totalPosts={menteesData.length}
        paginate={paginate}
        paginateBack={paginateBack}
        paginateFront={paginateFront}
      />
    </div>
  );
};

export default PageHoc(Mentees);
