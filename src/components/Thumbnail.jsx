import React, { useContext } from "react";
// import { Link } from "react-router-dom";

const Thumbnail = (props) => {
  const { thumbnail, title, description, name, mediaUrl, pic } = props;
  // console.log("mediaurl:", mediaUrl);

  return (
    <>
      <div className="flex flex-col hover:shadow-lg  hover:cursor-pointer mx-4 md:mx-auto ">
        <div className="  rounded-lg mb-2 overflow-hidden">
          <img src={thumbnail} alt="" className="" />
        </div>
        <div className="flex flex-row" style={{ backgroundColor: "" }}>
          <div className="h-12 w-12 md:h-14 md:w-14 rounded-full  bg-white">
            <img
              src={pic}
              alt=""
              className=" rounded-full object-cover h-12 w-12 md:h-14 md:w-14 "
            />
          </div>
          <div className="ml-2">
            <h2 className="text-white">{title}</h2>
            <h1 className="text-gray-500">{name}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Thumbnail;
