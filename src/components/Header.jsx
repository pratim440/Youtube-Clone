import React, { useState } from "react";
import "./../css/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";

function Header() {
  const [hover, setHover] = useState(false);
  return (
    <div className="header">
      <div className="header_left">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png"
          alt="logo"
        />
      </div>
      <div className="search_container">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control shadow-none search_input"
            placeholder="Search"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <div
            type="button"
            onClick={() => console.log("clicked")}
            className="input-group-prepend search_button "
          >
            <span
              className="input-group-text search_icon"
              id="basic-addon1"
              onMouseOver={() => setHover(true)}
              onMouseOut={() => setHover(false)}
            >
              <SearchIcon
                className="icon"
                style={hover ? { color: "#353b48" } : { color: "#7f8fa6" }}
              />
            </span>
          </div>
        </div>
      </div>
      <div className="header_right">
        <IconButton className="buttons">
          <VideoCallIcon className="right_icons" />
        </IconButton>
        <IconButton className="buttons">
          <AppsIcon className="right_icons" />
        </IconButton>
        <IconButton className="buttons">
          <NotificationsIcon className="right_icons" />
        </IconButton>
        <Avatar className="right_icons avatar">P</Avatar>
      </div>
    </div>
  );
}

export default Header;
