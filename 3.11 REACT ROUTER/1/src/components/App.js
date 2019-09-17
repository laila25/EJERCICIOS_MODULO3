import React from "react";
import "../stylesheets/App.css";
import Home from "./Home";
import About from "./About";
import Pricing from "./Pricing";
import { Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <ul className="app-menu">
        <li className="app-menu-item">
          <Link to="/Home">HOME</Link>
        </li>
        <li className="app-menu-item">
          <Link to="/Pricing">PRICING</Link>
        </li>
        <li className="app-menu-item">
          <Link to="/About">ABOUT</Link>
        </li>
      </ul>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Home" component={Home} />
          <Route path="/Pricing" component={Pricing} />
          <Route path="/About" component={About} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
