import React from "react";
import "./../css/DisplayNav.css";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import HomeIcon from "@material-ui/icons/Home";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import TheatersIcon from "@material-ui/icons/Theaters";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import { ToggleNav } from "../utils";
function DisplayNav(props) {
  return (
    <div
      className="toggleClass"
      style={props.show ? { marginLeft: "240px" } : { marginRight: "-480px" }}
    >
      <div className="navItems">
        <ToggleNav icon={HomeIcon} name="Home" path="/" />
        <ToggleNav icon={WhatshotIcon} name="Trending" path="/Trending" />
        <ToggleNav
          icon={SubscriptionsIcon}
          name="Subscriptions"
          path="/Subscriptions"
        />
        <ToggleNav icon={VideoLibraryIcon} name="Library" path="Library" />
        <ToggleNav icon={HistoryIcon} name="History" path="/History" />
        <ToggleNav
          icon={OndemandVideoIcon}
          name="Your Videos"
          path="/YourVideos"
        />
        <ToggleNav icon={TheatersIcon} name="Your Movies" path="Your Movies" />
        <ToggleNav
          icon={WatchLaterIcon}
          name="Watch Later"
          path="/WatchLater"
        />
        <ToggleNav
          icon={ThumbUpAltIcon}
          name="Liked Videos"
          path="/LikedVideos"
        />
      </div>
    </div>
  );
}

export default DisplayNav;
