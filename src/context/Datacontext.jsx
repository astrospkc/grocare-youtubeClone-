import { createContext, useEffect, useState } from "react";
const Data = createContext(null);

const Datacontext = (props) => {
  // page number track
  const [page, setPage] = useState(1);

  // state of fetched data
  const [data, setData] = useState([]);

  // const url = "https://internship-service.onrender.com/videos?page=2";
  const getData = async (pageNum) => {
    try {
      const res = await fetch(
        `https://internship-service.onrender.com/videos?page=${pageNum}`
      );
      const info = await res.json();
      console.log(info.data.posts);
      const infos = info.data.posts;
      setData((prevData) => [...prevData, ...infos]);
      console.log(data);
    } catch (error) {
      console.log("error fetching data: ", error);
    }
  };

  // scroll event handler
  const handleScroll = () => {
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const documentHeight = document.documentElement.offsetHeight;
    const scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;

    if (scrollTop + windowHeight >= documentHeight) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  // add scroll event listener when component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // getting data when page number changes
  useEffect(() => {
    getData(page);
  }, [page]);

  return (
    <>
      <Data.Provider value={{ data }}>{props.children}</Data.Provider>
    </>
  );
};

export default Datacontext;
export { Data };
