import React from "react";
import "./App.css";
import OnionHater from "./OnionHater";
import Destiny from "./Destiny";
import RandomMurray from "./RandomMurray";

class App extends React.Component {
  render() {
    return (
      <div>
        <OnionHater />
        <br />
        <Destiny />
        <br />
        <RandomMurray />
      </div>
    );
  }
}

export default App;
