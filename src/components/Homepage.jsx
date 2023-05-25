import { useContext } from "react";
import Navbar from "./Navbar";

import SideBar from "./SideBar";

import Mainpage from "./Mainpage";

import { Routes, Route } from "react-router-dom";
import VideoPage from "./VideoPage";

const Homepage = () => {
  return (
    <>
      <div className="flex flex-col relative">
        <div className="fixed w-[100%] top-0 ">
          <Navbar />
        </div>
        <div className="flex ">
          <div className="fixed md:left-0  h-fit md:h-screen w-fit md:w-[10%] md:bg-black md:top-[8%] ">
            <SideBar />
          </div>
          <div className="flex justify-center items-center w-full  md:w-[90%] md:ml-auto static mt-[6%]  ">
            <Routes>
              <Route path="/" element={<Mainpage />} />

              <Route path="/videopage" element={<VideoPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
