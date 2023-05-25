import React from "react";
import { useLocation } from "react-router-dom";
import SideThumbnailsVideoPage from "./SideThumbnailsVideoPage";

const VideoPage = () => {
  const location = useLocation();
  const { mediaUrl, title, name, description } = location.state;
  console.log("media:", mediaUrl);

  return (
    <>
      <div className="flex  flex-col md:flex-row  w-full pt-3">
        <div className="flex flex-col  md:w-[60%]  md:ml-auto">
          <div className="flex justify-center items-center">
            <iframe src={mediaUrl} height="540" frameborder="0" />
          </div>
          <div className="text-white">
            <h1 className=" text-xl font-bold">{title}</h1>
            <h1>{name}</h1>
            <p className="bg-gray-500 p-2 rounded-2xl">{description}</p>
          </div>
        </div>
        <div className="  md:w-[30%] md:ml-auto pt-6 bg-gray-900 shadow-lg">
          <SideThumbnailsVideoPage />
        </div>
      </div>
    </>
  );
};

export default VideoPage;
