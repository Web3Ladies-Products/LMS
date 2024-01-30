import React from "react";
import {
  Table,
  Box,
  Thead,
  Tbody,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";

const header = [
  {
    name: "Name"
  },
  {
    name: "Email"
  },
  {
    name: "Track"
  },
  {
    name: "Status"
  },
]

function MenteeList({ currentPosts, loading }) {
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <Box h={"fit-content"}>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr color="grey">
              {header.map((item) => (
                <Th key={item.name}>{item.name}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {currentPosts.map((item) => (
              <Tr key={item.id}>
                <Td>{item.name}</Td>
                <Td color="grey">{item.email}</Td>
                <Td>{item.track}</Td>
                <Td color="grey">
                  <span
                    className={`m-auto w-fit px-3 py-2 rounded-md  ${
                      item.status === "Probation"
                        ? "text-[white] bg-[#FF5F2D]"
                        : item.status === "Evited" ? "text-[white] bg-[#FF2F2F]" :"text-[white] bg-[#3EB876]"
                    }`}
                  >
                    {item.status}
                  </span>
                </Td>
                <Td>
                  <Menu bg="primary">
                    <MenuButton
                      as={Button}
                      bg="transparent"
                      _hover={{ bg: "transparent" }}
                    >
                      <BsThreeDots className="cursor-pointerml-auto text-[grey]" />
                    </MenuButton>
                    <MenuList>
                      <MenuItem
                        onClick={() => alert("Kagebunshin")}
                        fontWeight="semi-bold"
                        _hover={{ color: "red"}}
                      >
                        Change status
                      </MenuItem>
                      <MenuItem
                        onClick={() => alert("Kagebunshin")}
                        fontWeight="semi-bold"
                        _hover={{ color: "red"}}
                      >
                        Remove mentor
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default MenteeList;
