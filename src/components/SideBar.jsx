// import React from 'react'

const SideBar = () => {
  return (
    <>
      <div className=" md:min-h-screen  text-white  justify-around place-items-stretch md:shadow-lg md:shadow-black hidden  md:flex ">
        <ul className="flex flex-col m-4 overflow-hidden ">
          <li className="mb-4 mx-3 hover:cursor-pointer hover:text-gray-600 active:text-gray-600">
            Home{" "}
          </li>
          <li className="my-4 mx-3 hover:cursor-pointer hover:text-gray-600 active:">
            Explore
          </li>
          <li className="my-4 mx-3 hover:cursor-pointer hover:text-gray-600 active:">
            Genres
          </li>
          <li className="my-4 mx-3 hover:cursor-pointer hover:text-gray-600 active:">
            blogs
          </li>
          <li className="my-4 mx-3 hover:cursor-pointer hover:text-gray-600 active:">
            Trending
          </li>
          <li className="my-4 mx-3 hover:cursor-pointer hover:text-gray-600 active:">
            Learning
          </li>
          <li className="my-4 mx-3 hover:cursor-pointer hover:text-gray-600 active:">
            Movies and shows
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
