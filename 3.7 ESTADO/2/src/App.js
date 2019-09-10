import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      class: "red"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      let nextClass;
      if (prevState.class === "red") {
        nextClass = "blue";
      } else {
        nextClass = "red";
      }
      return { class: nextClass };
    });
  }

  render() {
    return (
      <div
        className={`main ${this.state.class}`}
        onClick={this.handleClick}
      ></div>
    );
  }
}

export default App;
