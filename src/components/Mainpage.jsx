import React, { useContext } from "react";
import { Data } from "../context/Datacontext";
import Thumbnail from "./Thumbnail";
import { Link } from "react-router-dom";

const Mainpage = () => {
  const { data } = useContext(Data);
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {data &&
          data.map((e, id) => {
            const url = e.submission.mediaUrl;
            console.log("url:", url);
            return (
              <Link key={id} to="/videopage" state={{ mediaUrl: url }}>
                <div className="mx-2">
                  <Thumbnail
                    thumbnail={e.submission.thumbnail}
                    name={e.creator.name}
                    title={e.submission.title}
                    //   mediaUrl={e.submission.mediaUrl}
                  />
                </div>
              </Link>
            );
          })}
      </div>
    </>
  );
};

export default Mainpage;
