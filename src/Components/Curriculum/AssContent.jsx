import React from 'react'
import {
  Table,
  Box,
  Tbody,
  Tr,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { classAss } from "../../Data"
import { Link } from 'react-router-dom';


const AssContent = () => {
  return (
    <div>
      <div className='gap-3 flex flex-wrap my-3'>
        {classAss.header.map((item) => (
          <button 
            key={item.id}
            className="py-2 px-4 text-[#fff] bg-primary rounded-[20px] font-bold"
          >{item.type}</button>
        ))}
      </div>
      <Box h={"fit-content"}>
      <TableContainer>
        <Table variant="simple">
          <Tbody>
            {classAss.list.map((item) => (
              <Tr key={item.id}>
                <Td>{item.title}</Td>
                <Td color="grey">
                  <span
                    className={`m-auto font-semibold w-fit px-3 py-2 rounded-md  ${
                      item.status === "New"
                        ? "text-[#3EB876] bg-[#ECF8F2]"
                        : item.status === "Pending" ? "text-[#FF5F2D] bg-[#FFF2EA]" :"text-primary bg-[#F2E7FF]"
                    }`}
                  >
                    {item.status}
                  </span>
                </Td>
                <Td color="grey">
                  <Link to={`assignment/${item.id}`} className="p-2 text-[#AAA3B1] hover:bg-[#ECF8F2] ">View</Link>
                </Td>
                <Td className='text-primary font-semibold'>{item.submit}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
    </div>
  )
}

export default AssContent