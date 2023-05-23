import React from "react";
import { useLocation } from "react-router-dom";

const VideoPage = () => {
  const location = useLocation();
  const { mediaUrl } = location.state;
  console.log("media:", mediaUrl);

  return (
    <>
      <div>
        <iframe
          title="Video Player"
          width="560"
          height="315"
          src={mediaUrl}
          allowFullScreen
          frameBorder="0"
        ></iframe>
      </div>
    </>
  );
};

export default VideoPage;
