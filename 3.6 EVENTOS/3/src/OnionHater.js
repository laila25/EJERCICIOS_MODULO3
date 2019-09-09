import React from "react";
import "./App.css";

class OnionHater extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.isHating = false;
  }

  handleClick(event) {
    const value = event.target.value;
    const valueMin = value.toLowerCase();
    console.log(valueMin);
    if (valueMin.includes("cebolla")) {
      this.isHating = true;
    } else {
      this.isHating = false;
    }
    console.log(this.isHating);
    this.forceUpdate();
  }

  render() {
    return (
      <div className={`OnionHater ${this.isHating === true ? "red" : ""}`}>
        <label>¿Qué te parece la cebolla?</label>
        <br />
        <input type="textarea" name="textarea" onChange={this.handleClick} />
      </div>
    );
  }
}

export default OnionHater;

//<div className={`OnionHater ${this.isHating === true ? "red" : ""}`}>
