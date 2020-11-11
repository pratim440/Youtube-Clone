import { Avatar } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./../css/Home.css";
import data from "./../data";
import Card from "./Card";

function Home() {
  return (
    <div
      className="home"
      style={window.innerWidth < 767 ? { margin: "110px 0 0" } : null}
    >
      {data.items.map((video) => {
        return (
          <Link
            className="classLink"
            to={`/video/${video.id.videoId}`}
            style={window.innerWidth < 767 ? { width: "100vw" } : null}
          >
            <Card
              thumbnail={video.snippet.thumbnails.medium.url}
              videoTitle={video.snippet.title}
              channelTitle={video.snippet.channelTitle}
              time={video.snippet.publishedAt}
            />
          </Link>
        );
      })}
    </div>
  );
}

export default Home;
