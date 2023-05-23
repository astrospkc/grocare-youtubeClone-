import { useContext } from "react";
import Navbar from "./Navbar";

import SideBar from "./SideBar";
import Thumbnail from "./Thumbnail";
import VideoCard from "./VideoCard";
import Mainpage from "./Mainpage";
// import { Data } from "../context/Datacontext";
import { Routes, Route } from "react-router-dom";
import VideoPage from "./VideoPage";

const Homepage = () => {
  // const { data } = useContext(Data);
  //   console.log(data);
  return (
    <>
      <div className="flex flex-col relative">
        <div className="sticky">
          <Navbar />
        </div>
        <div className="flex ">
          <div className="fixed md:left-0  h-fit md:h-screen w-fit md:w-[10%] md:bg-black ">
            <SideBar />
          </div>
          <div className="flex justify-center items-center w-full md:w-[90%] md:ml-auto ">
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
