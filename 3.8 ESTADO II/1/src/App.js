import React from "react";
import "./App.css";
import Form from "./Form";

let newName;
let newDescription;
let newLanguaje;

class App extends React.Component {
  constructor() {
    super();
    this.updateName = this.updateName.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
    this.updateLanguaje = this.updateLanguaje.bind(this);
  }
  updateName(ev) {
    newName = ev.target.value;
    this.forceUpdate();
  }
  updateDescription(ev) {
    newDescription = ev.target.value;
    this.forceUpdate();
  }
  updateLanguaje(ev) {
    newLanguaje = ev.target.value;
    this.forceUpdate();
  }

  render() {
    return (
      <div className="app">
        <form>
          <label htmlFor="name">Título de la Película: </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={this.updateName}
          ></input>
          <br />
          <label htmlFor="description">De que va: </label>
          <input
            type="textarea"
            id="description"
            name="description"
            onChange={this.updateDescription}
          ></input>
          <br />
          <label htmlFor="languaje">Idioma: </label>
          <select id="languaje" name="languaje" onChange={this.updateLanguaje}>
            <option value="">-</option>
            <option value="español">Español</option>
            <option value="ingles">Inglés</option>
            <option value="portugues">Portugués</option>
          </select>
        </form>
        <section className="card">
          <p>
            <b>Título:</b> {newName}
          </p>
          <p>
            <b>Descripción:</b> {newDescription}
          </p>
          <p>
            <b>Idioma:</b> {newLanguaje}
          </p>
        </section>
      </div>
    );
  }
}
export default App;
