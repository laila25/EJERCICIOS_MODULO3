import React from "react";

const getRandomInteger = (max, min) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const MIN_SIZE = 200;
const MAX_SIZE = 400;

class RandomMurray extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(ev) {
    this.forceUpdate();
  }
  render() {
    const randomMurray = getRandomInteger(MIN_SIZE, MAX_SIZE);

    return (
      <div>
        <img
          src={`http://www.fillmurray.com/200/${randomMurray}`}
          alt="Random murray"
        />
        <br />
        <button onClick={this.handleClick}>Change Bill</button>
      </div>
    );
  }
}

export default RandomMurray;
