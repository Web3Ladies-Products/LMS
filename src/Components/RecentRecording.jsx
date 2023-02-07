import React from "react";
import VideoCard from "./VideoCard";

const recentVideoData = [
  {
    videoUrl: "/dashboard",
    title: "Live Class Recording",
    time: "4 hours ago",
  },
  {
    videoUrl: "/dashboard",
    title: "Live Class Recording",
    time: "4 hours ago",
  },
  {
    videoUrl: "/dashboard",
    title: "Live Class Recording",
    time: "4 hours ago",
  },
];
const RecentRecording = () => {
  return (
    <div className="w-[353px]">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-[20px]">Recent Recording</h3>
        <p className="text-[#AAA3B1]">See all</p>
      </div>
      <div className="mt-6 bg-white p-6 flex flex-col gap-7">
        {recentVideoData.map((data) => (
          <VideoCard
            videoUrl={data.videoUrl}
            title={data.title}
            time={data.time}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentRecording;
