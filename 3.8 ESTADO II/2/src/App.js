import React from "react";
import "./App.css";

let genreItems = [];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nombre: "",
      description: "",
      languaje: "",
      age: "",
      genre: []
    };
    this.updateForm = this.updateForm.bind(this);
    this.updateCheckbox = this.updateCheckbox.bind(this);
  }

  updateForm(ev) {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  }

  updateCheckbox(ev) {
    genreItems[genreItems.length] = ev.target.value;
    this.setState({
      [ev.target.name]: genreItems
    });
  }

  render() {
    return (
      <div className="app">
        <form>
          <label htmlFor="name">Título de la Película: </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            onChange={this.updateForm}
          ></input>
          <br />
          <label htmlFor="description">De que va: </label>
          <input
            type="textarea"
            id="description"
            name="description"
            onChange={this.updateForm}
          ></input>
          <br />
          <label htmlFor="languaje">Idioma: </label>
          <select id="languaje" name="languaje" onChange={this.updateForm}>
            <option value="">-</option>
            <option value="español">Español</option>
            <option value="ingles">Inglés</option>
            <option value="portugues">Portugués</option>
          </select>
          <br />
          <p>Edad:</p>
          <label htmlFor="age1">7</label>
          <input
            type="radio"
            name="age"
            id="age1"
            checked={this.state.age === "7" ? true : false}
            value="7"
            onChange={this.updateForm}
          ></input>
          <label htmlFor="age2">12</label>
          <input
            type="radio"
            name="age"
            id="age2"
            value="12"
            checked={this.state.age === "12" ? true : false}
            onChange={this.updateForm}
          ></input>
          <label htmlFor="age3">16</label>
          <input
            type="radio"
            name="age"
            id="age3"
            value="16"
            checked={this.state.age === "16" ? true : false}
            onChange={this.updateForm}
          ></input>
          <label htmlFor="age4">18</label>
          <input
            type="radio"
            name="age"
            id="age4"
            value="18"
            checked={this.state.age === "18" ? true : false}
            onChange={this.updateForm}
          ></input>
          <p>Género:</p>
          <label htmlFor="genre1">Comedia</label>
          <input
            type="checkbox"
            name="genre"
            id="genre1"
            value="comedia"
            checked={this.state.genre.includes("comedia") ? true : false}
            onChange={this.updateCheckbox}
          ></input>
          <label htmlFor="genre2">Drama</label>
          <input
            type="checkbox"
            name="genre"
            id="genre2"
            value="drama"
            checked={this.state.genre.includes("drama") ? true : false}
            onChange={this.updateCheckbox}
          ></input>
        </form>
        <section className="card">
          <p>
            <b>Título:</b> {this.state.nombre}
          </p>
          <p>
            <b>Descripción:</b> {this.state.description}
          </p>
          <p>
            <b>Idioma:</b> {this.state.languaje}
          </p>
          <p>
            <b>Edad:</b> {this.state.age}
          </p>
          <p>
            <b>Género:</b> {this.state.genre.join(", ")}
          </p>
        </section>
      </div>
    );
  }
}
export default App;
