import React, { useContext } from "react";
import { Data } from "../context/Datacontext";
import Thumbnail from "./Thumbnail";
import { Link } from "react-router-dom";

const Mainpage = () => {
  const { data } = useContext(Data);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {data &&
          data.map((e, id) => {
            const url = e.submission.mediaUrl;
            const title = e.submission.title;
            console.log("url:", url);
            console.log("title: ", title);
            return (
              <Link
                key={id}
                to="/videopage"
                state={{
                  mediaUrl: url,
                  title: title,
                  name: e.submission.name,
                  description: e.submission.description,
                }}
              >
                <div className="mx-4">
                  <Thumbnail
                    thumbnail={e.submission.thumbnail}
                    name={e.creator.name}
                    title={e.submission.title}
                    pic={e.creator.pic}
                    // mediaUrl={e.submission.mediaUrl}
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
