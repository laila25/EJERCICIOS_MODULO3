import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      content: "hola holita"
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    const text = ev.target.value;
    this.setState({
      content: `${text}`
    });
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange}></input>
        <p>{this.state.content}</p>
      </div>
    );
  }
}

export default App;
