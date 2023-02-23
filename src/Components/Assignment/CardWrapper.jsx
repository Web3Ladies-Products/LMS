import React from "react";
import { BsPlusLg } from "react-icons/bs"
import { Link } from "react-router-dom";
import { AssignCard } from "./AssignCard";

const CardWrapper = ({ assignmentData }) => {
  return (
    <>
    <Link to="/new/assignments" className="flex gap-2 mb-7 w-fit ml-auto hover:border-b-2 border-primary">
    <BsPlusLg className=" my-auto text-primary text-[16px]"/>
    <p className="font-semibold text-primary">Create assignment</p>
    </Link>
    <div className="flex flex-wrap gap-6 ">
      {assignmentData.map((item) => (
          <AssignCard key={item.id} item={item} />
      ))}
    </div>
    </>
  );
};

export default CardWrapper;
