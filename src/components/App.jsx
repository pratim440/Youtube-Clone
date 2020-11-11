import React from "react";
import Header from "./Header";
import "./../css/App.css";
import SideNavbar from "./SideNavbar";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import ShowVideo from "./ShowVideo";
import Error from "./Error";

function App() {
  return (
    <div className="App">
      <SideNavbar />
      <div className="main_container">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/video/:id" component={ShowVideo} />
          <Route component={Error} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
