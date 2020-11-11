import React, { useState } from "react";
import "./../css/SideNavbar.css";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import { NavLink } from "react-router-dom";
import DisplayNav from "./DisplayNav";

function SideNavbar() {
  const [clickCount, setClickCount] = useState(1);
  const [displaySideNav, setDisplaySideNav] = useState(false);
  return (
    <div className="side_nav_wrapper">
      <div
        className="side_nav_container"
        style={window.innerWidth < 767 ? { minHeight: "0" } : null}
      >
        <div className="side_nav">
          <IconButton id="toggle">
            <MenuIcon
              onClick={() => {
                if (clickCount % 2 === 0) {
                  setDisplaySideNav(false);
                } else {
                  setDisplaySideNav(true);
                }
                setClickCount(clickCount + 1);
              }}
            />
          </IconButton>
          <div style={window.innerWidth < 767 ? { display: "none" } : null}>
            <NavLink
              exact
              activeClassName="active_link"
              className="side_nav_items"
              to="/"
            >
              <HomeIcon className="side_nav_icons" />
              Home
            </NavLink>
            <NavLink
              exact
              activeClassName="active_link"
              className="side_nav_items"
              to="/Trending"
            >
              <WhatshotIcon className="side_nav_icons" />
              Trending
            </NavLink>
            <NavLink
              exact
              activeClassName="active_link"
              className="side_nav_items"
              to="/Subscriptions"
            >
              <SubscriptionsIcon className="side_nav_icons" />
              Subscriptions
            </NavLink>
            <NavLink
              exact
              activeClassName="active_link"
              className="side_nav_items"
              to="/Library"
            >
              <VideoLibraryIcon className="side_nav_icons" />
              Library
            </NavLink>
          </div>
        </div>
      </div>
      <DisplayNav show={displaySideNav} />
    </div>
  );
}

export default SideNavbar;
