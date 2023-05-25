import { useState } from "react";

import { BsSearch } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

const Navbar = () => {
  const [searchHandler, setSearchHandler] = useState(false);
  function search() {
    setSearchHandler((prev) => !prev);
  }

  return (
    <>
      {/* logo  */}
      <div className="flex flex-row bg-black ">
        <div className="flex flex-row m-6 ">
          {/* <img
            src="../images/videoLogo.png"
            alt="icreate logo"
            className="h-10 w-10 md:h-14 md:w-14"
          /> */}
          <h1
            className="text-white  text-md md:text-2xl ml-3 flex flex-row items-center"
            style={{ fontFamily: "Dosis" }}
          >
            <span>
              <BsYoutube className="text-red-600 text-3xl mr-2  " />
            </span>
            <span>YouTube</span>
          </h1>
        </div>
        {/* search bar */}
        <div className="flex flex-row justify-center items-center">
          <div
            className="flex  justify-center items-center text-gray-500 text-bold text-xl md  hover:text-white md:hidden"
            onClick={search}
          >
            <BsSearch />
          </div>

          <div
            className={
              searchHandler
                ? "flex justify-center items-center  w-full"
                : "hidden md:flex justify-center items-center w-5/6 "
            }
          >
            <input
              type="text"
              className="rounded-2xl h-9 w-min bg-black border-2 border-gray-600 p-3"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
