import React from "react";
import "./App.css";

let today = new Date();
let date =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      time: `${date}`
    };
    this.updateClock = this.updateClock.bind(this);
  }

  updateClock() {
    today = new Date();
    if (today.getSeconds() < 10) {
      date =
        today.getHours() + ":" + today.getMinutes() + ":0" + today.getSeconds();
    } else {
      date =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    }

    this.setState({
      time: `${date}`
    });
  }

  render() {
    setInterval(this.updateClock, 1000);
    return <div>{this.state.time}</div>;
  }
}

export default Clock;
