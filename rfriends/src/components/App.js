import React from "react";
import "../stylesheets/App.css";

//no pinta, lo miro por consola

let robots = [
  {
    id: "Leanne",
    name: "Leanne Graham",
    email: "sincere@april.biz"
  },
  {
    id: "Hervin",
    name: "Hervin Howell",
    email: "shanna@melisa.tv"
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      filteredRobots: robots
    };
    this.filterByName = this.filterByName.bind(this);
  }

  filterByName(ev) {
    let robotName = robots.filter(robot =>
      robot.name.toUpperCase().includes(ev.target.value.toUpperCase())
    );
    this.setState({
      filteredRobots: robotName
    });
  }

  render() {
    console.log(this.state.filteredRobots);
    return (
      <div className="App">
        <label htmlFor="name">Nombre </label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={this.filterByName}
        ></input>
      </div>
    );
  }
}

export default App;
