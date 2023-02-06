import React, { useState } from "react";
import { PageHoc } from "../../Components";
import { BsThreeDots } from "react-icons/bs";
import { FiChevronRight } from "react-icons/fi";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Select,
  ModalFooter,
  Button,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const SingleGroup = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="max-w-[1140px]  ">
      <Modal size="lg" isCentered={true} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <div className="  px-4 py-[48px] bg-white rounded-2xl">
              <h4 className="font-bold text-xl">Assign role</h4>
              <p className="mt-[43px]">Members name</p>
              <p className="mt-[15px] font-bold">Oluchi Enebeli</p>
              <p className="mt-7">Role </p>
              <div className="max-w-[279px]">
                <Select placeholder="Select option">
                  <option value="leader">Group leader</option>
                  <option value="member">Member</option>
                </Select>
              </div>
            </div>
          </ModalBody>

          <ModalFooter>
            <Button backgroundColor="#7D0BFE" color="white">
              Assign
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <div className="text-sm mb-3 flex items-center gap-1">
        <Link to="/groups">
          <p onCl className="text-[#7D0BFE] ">
            Group
          </p>
        </Link>
        <FiChevronRight size={22} />
        <p>Dragonflyers</p>
      </div>
      <div className="flex justify-between">
        <h3 className="text-2xl font-bold">Dragonflyers</h3>
        <button className="flex justify-center text-[#7D0BFE] items-center">
          {" "}
          <span className="text-3xl mr-1">+</span>Add member
        </button>
      </div>
      <div className="bg-white mt-5">
        <table className="table-auto w-full text-left">
          <thead>
            <tr className=" text-[#AAA3B1] border-b-[1px] border-[#ECECEC]">
              <th className=" py-[22px] font-thin  px-2 md:px-8">Name</th>
              <th className="px-1 py-[22px] font-thin">Email</th>
              <th className="px-1 py-[22px] font-thin">Role</th>

              <th className=" px-2 md:px-8 py-[22px] font-thin text-right">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-[#AAA3B1] border-b-[1px] border-[#ECECEC]">
              <td className="  px-2 md:px-8 py-[20px] text-[#59545F]">
                Oluchi Enebeli{" "}
              </td>
              <td className=" px-1 py-[20px]">oluchienebeli@gmail.com</td>
              <td className=" px-1 py-[20px]">Group leader</td>

              <td className=" group relative  px-2 md:px-8 py-[20px] text-right flex justify-end">
                <BsThreeDots size={24} className="" />
                <div className="absolute hidden group-hover:flex rounded right-10 bottom-10 w-[146px] px-4 drop-shadow py-[25px] bg-white  flex-col items-start gap-2">
                  <button onClick={onOpen} className="text-[#858585]">
                    Change role
                  </button>
                  <button className="text-[#FF2F2F]">Delete member</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PageHoc(SingleGroup);
