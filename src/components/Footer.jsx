import React from "react";
import { BsHouseDoorFill } from "react-icons/bs";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { BsReverseLayoutSidebarInsetReverse } from "react-icons/bs";

import { BsStack } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer>
        <div className=" flex md:hidden bottom-0 absolute w-full justify-around">
          <ul className="flex flex-row m-2">
            <section className="flex flex-col justify-center items-center ">
              <BsHouseDoorFill className="text-gray-600 hover:text-white hover:cursor-pointer" />
              <li className="mx-3 text-sm text-gray-700 font-semibold">Home</li>
            </section>
            <section className="flex flex-col justify-center items-center">
              <BsFillCameraVideoFill className="text-gray-700 hover:text-white hover:cursor-pointer" />
              <li className="mx-3 text-sm text-gray-700 font-semibold">
                Shorts
              </li>
            </section>
            <section className="flex flex-col justify-center items-center">
              <BsStack className="text-gray-700 hover:text-white hover:cursor-pointer" />
              <li className="mx-3 text-sm text-gray-700 font-semibold">
                Library
              </li>
            </section>
            <section className="flex flex-col justify-center items-center">
              <BsReverseLayoutSidebarInsetReverse className="text-gray-700 hover:text-white hover:cursor-pointer" />
              <li className="mx-3 text-sm font-semibold text-gray-700 ">
                Blogs
              </li>
            </section>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
