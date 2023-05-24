import React, { useContext } from "react";
// import { Link } from "react-router-dom";

const ThumbnailVideo = (props) => {
  const { thumbnail, title, description, name, mediaUrl } = props;
  // console.log("mediaurl:", mediaUrl);

  return (
    <>
      {/* <Link to={{ pathname: "/videopage", state: { mediaUrl } }}> */}
      <div className="flex flex-row hover:shadow-lg  hover:cursor-pointer  p-2">
        <div
          className="  rounded-lg mb-2 overflow-hidden "
          style={{ backgroundColor: "#219ebc" }}
        >
          <img src={thumbnail} alt="" className="h-40" />
        </div>
        <div className="" style={{ backgroundColor: "" }}>
          <h1 className="text-white">{name}</h1>
          <h2 className="text-gray-500">{title}</h2>
        </div>
      </div>
      {/* </Link> */}
    </>
  );
};

export default ThumbnailVideo;
