import React, { useContext } from "react";
// import { Link } from "react-router-dom";

const ThumbnailVideo = (props) => {
  const { thumbnail, title, description, name, mediaUrl, pic } = props;
  // console.log("mediaurl:", mediaUrl);

  return (
    <>
      {/* <Link to={{ pathname: "/videopage", state: { mediaUrl } }}> */}
      <div className="flex flex-col md:flex-row hover:shadow-lg  hover:cursor-pointer  p-2">
        <div
          className="  rounded-lg mb-2 overflow-hidden "
          style={{ backgroundColor: "#219ebc" }}
        >
          <img src={thumbnail} alt="" className=" min-h-full md:h-40" />
        </div>
        <div className=" flex flex-row ml-1" style={{ backgroundColor: "" }}>
          <div className="h-12 w-12  rounded-full  bg-white">
            <img
              src={pic}
              alt=""
              className="rounded-full object-cover h-12 w-12  "
            />
          </div>
          <div className="ml-2">
            <h2 className="text-white">{title}</h2>
            <h1 className="text-gray-500">{name}</h1>
          </div>
        </div>
      </div>
      {/* </Link> */}
    </>
  );
};

export default ThumbnailVideo;
