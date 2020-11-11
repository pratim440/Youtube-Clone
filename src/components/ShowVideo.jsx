import { getDefaultNormalizer } from "@testing-library/react";
import React from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import "./../css/ShowVideo.css";
import data from "./../data";
import getTime from "./../utils";

function ShowVideo() {
  const playerHeight = window.innerWidth < 767 ? 400 : 540;
  const opts = {
    height: playerHeight,
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const { id } = useParams();
  const videoDetails = data.items.filter((video) => {
    return video.id.videoId === id;
  });
  return (
    <div
      className="videoScreen"
      style={window.innerWidth < 767 ? { margin: "110px 0 0" } : null}
    >
      <div
        className="player"
        style={window.innerWidth < 767 ? { padding: "0 0 20px" } : null}
      >
        <YouTube videoId={id} opts={opts} />
      </div>
      <h5>{videoDetails[0].snippet.title}</h5>
      <p>
        {videoDetails[0].snippet.channelTitle} •{" "}
        {getTime(videoDetails[0].snippet.publishedAt)}
      </p>
    </div>
  );
}

export default ShowVideo;
