import React from "react";
import "./App.css";
import Clock from "./components/Clock";
import Noclock from "./components/Noclock";
import { Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Link to="/clock">CLOCK</Link>
      <br />
      <Link to="/noclock">NO-CLOCK</Link>
      <Switch>
        <Route path="/clock" component={Clock} />
        <Route path="/noclock" component={Noclock} />
      </Switch>
    </div>
  );
}

export default App;
