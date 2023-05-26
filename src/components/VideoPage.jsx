import React from "react";
import { useLocation } from "react-router-dom";
import SideThumbnailsVideoPage from "./SideThumbnailsVideoPage";

const VideoPage = () => {
  const location = useLocation();
  const { mediaUrl, title, name, description, pic } = location.state;
  console.log("pic: ", pic);

  return (
    <>
      <div className="flex  flex-col md:flex-row  w-full pt-3">
        <div className="flex flex-col  md:w-[60%]  md:ml-auto">
          <div className="flex justify-center items-center">
            <iframe
              src={mediaUrl}
              // height="800"
              // width="600"
              className="rounded-2xl shadow-lg shadow-black h-[600px] w-full md:h-[800px] md:w-[600px]"
              frameborder="0"
            />
          </div>
          <div className="text-white flex   m-2">
            <div>
              <h1 className=" text-xl font-bold m-2">{title}</h1>
              {/* <h1>{name}</h1> */}
              <p className="bg-gray-500 p-2 rounded-2xl">{description}</p>
            </div>
          </div>
        </div>
        <div className="  md:w-[30%] md:ml-auto pt-6 md:border-l-2 shadow-lg">
          <SideThumbnailsVideoPage />
        </div>
      </div>
    </>
  );
};

export default VideoPage;
