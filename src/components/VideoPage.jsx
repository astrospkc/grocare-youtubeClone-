import React from "react";
import { useLocation } from "react-router-dom";
import SideThumbnailsVideoPage from "./SideThumbnailsVideoPage";

const VideoPage = () => {
  const location = useLocation();
  const { mediaUrl, title, name, description } = location.state;
  console.log("media:", mediaUrl);

  return (
    <>
      <div className="flex flex-row  w-full">
        <div className="flex flex-col  md:w-[60%]  md:ml-auto">
          <div className="flex justify-center items-center">
            <iframe src={mediaUrl} height="540" frameborder="0" />
          </div>
          <div className="text-white">
            <h1 className=" text-xl font-bold">{title}</h1>
            <h1>{name}</h1>
            <p>{description}</p>
          </div>
        </div>
        <div className="  md:w-[30%] md:ml-auto bg-gray-900 shadow-lg">
          <SideThumbnailsVideoPage />
        </div>
      </div>
    </>
  );
};

export default VideoPage;
