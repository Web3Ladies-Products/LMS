import React from "react";
import { PageHoc } from "../../Components";
import { tracksImage } from "../../assets";
import { BsThreeDotsVertical, BsPlusLg } from "react-icons/bs"


const tracksList = [
  {
    id: 1,
    trackImage: tracksImage,
    track: "Web Development",
  },
  {
    id: 2,
    trackImage: tracksImage,
    track: "Product Design",
  },
  {
    id: 3,
    trackImage: tracksImage,
    track: "Blockchain Development",
  },
];

const Track = () => {
  return (
    <div
      className="flex flex-wrap gap-7"
    >
      {tracksList?.map((track) => (
      <div
        className="relative cursor-pointer rounded-2xl overflow-hidden w-full mobile:w-[302px] p-4 bg-white"
        key={track.id}
      >
        <div className="relative">
          <img src={track.trackImage} className="rounded-lg object-contain" alt="" />
        </div>
        <p className="font-semibold text-[18px] my-3">{track.track}</p>
        <div >
          <BsThreeDotsVertical className="ml-auto text-[grey]" />
        </div>
      </div>

      ))}
      <div className="cursor-pointer flex rounded-2xl overflow-hidden w-full mobile:w-[302px] p-4 bg-white">
        <div className=" m-auto ">
          <BsPlusLg  className=" rounded-full mx-auto p-3 text-primary  bg-[#F8F2FF] text-[50px]"/>
          <p className="mt-2">Create track</p>
        </div>

      </div>
    </div>
  );
};

export default PageHoc(Track);
