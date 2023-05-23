import { useState } from "react";

import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  const [searchHandler, setSearchHandler] = useState(false);
  function search() {
    setSearchHandler((prev) => !prev);
  }

  return (
    <>
      {/* logo  */}
      <div className="flex flex-row  bg-red-400 ">
        <div className="flex flex-row m-6 ">
          {/* <img
            src="../images/videoLogo.png"
            alt="icreate logo"
            className="h-10 w-10 md:h-14 md:w-14"
          /> */}
          <h1
            className="text-white  text-md md:text-2xl ml-3"
            style={{ fontFamily: "Manrope" }}
          >
            YOUTUBE
          </h1>
        </div>
        {/* search bar */}
        <div className="flex flex-row justify-center items-center">
          <div
            className="flex  justify-center items-center text-gray-500 text-bold text-xl  hover:text-white md:hidden"
            onClick={search}
          >
            <BsSearch />
          </div>

          <div
            className={
              searchHandler
                ? "flex justify-center items-center  w-full"
                : "hidden md:flex justify-center items-center w-5/6"
            }
          >
            <input
              type="text"
              className="rounded-2xl h-9 w-min bg-gray-700 p-3"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
