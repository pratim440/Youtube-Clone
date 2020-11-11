import React from "react";
import { Avatar } from "@material-ui/core";
import "./../css/Card.css";
import getTime from "./../utils";

function Card(props) {
  return (
    <div
      className="card"
      style={window.innerWidth < 767 ? { width: "100vw" } : null}
    >
      <img className="thumbnail" src={props.thumbnail} alt="thumbnail" />
      <div className="card_details_container">
        <Avatar
          className="card_avatar"
          src={`https://picsum.photos/id/${
            Math.floor(Math.random() * 200) + 100
          }/200/300`}
          alt="X"
          style={window.innerWidth < 767 ? { margin: "10px 10px 0" } : null}
        />
        <div
          className="card_details"
          style={window.innerWidth < 767 ? { paddingLeft: "10px" } : null}
        >
          <h5>{props.videoTitle}</h5>
          <p>
            {props.channelTitle} • {getTime(props.time)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
