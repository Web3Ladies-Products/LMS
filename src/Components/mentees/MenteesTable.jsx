import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Progress,
} from "@chakra-ui/react";

import { BsThreeDots } from "react-icons/bs";

const MenteesTable = ({ menteesTableData }) => {
  return (
    <div className="mt-5 ">
      <TableContainer className="bg-white" color="#AAA3B1">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th color="AAA3B1">Name</Th>
              <Th color="AAA3B1">Track</Th>
              <Th color="AAA3B1">Progress</Th>
              <Th color="AAA3B1">grade</Th>
              <Th color="AAA3B1"></Th>
            </Tr>
          </Thead>
          <Tbody>
            {menteesTableData.map((data) => (
              <Tr key={data.id}>
                <Td>{data.name}</Td>
                <Td>{data.track}</Td>
                <Td>
                  <Progress
                    value={data.progress}
                    size="xs"
                    colorScheme="purple"
                  />
                </Td>
                <Td>{data.grade}</Td>
                <Td className="group relative">
                  {" "}
                  <BsThreeDots size={24} className="" />
                  <div className="absolute hidden group-hover:flex  rounded right-10 bottom-10 px-4 drop-shadow py-[15px] bg-white  ">
                    <button className="text-[#FF2F2F]">Remove mentee</button>
                  </div>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MenteesTable;
