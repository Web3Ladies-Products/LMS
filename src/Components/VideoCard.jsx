import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const VideoCard = ({ videoUrl, title, time }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        onClick={() => {
          navigate(videoUrl);
        }}
        className="relative cursor-pointer bg-[#F9F9F9] w-full h-[169px]"
      >
        <div className="absolute right-[128px] top-[48px]">
          <BsFillPlayCircleFill size={61} className="text-[#E3E3E3]" />
        </div>
      </div>
      <p className="mt-3">{title}</p>
      <p className="text-[#AAA3B1] mt-1">updated {time}</p>
    </div>
  );
};

export default VideoCard;
