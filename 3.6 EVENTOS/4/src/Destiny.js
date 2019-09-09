import React from "react";
import CityImage from "./CityImage";

let citySelected;

class Destiny extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(ev) {
    citySelected = ev.target.value;
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <select onChange={this.handleClick}>
          <option value="">Elige una ciudad</option>
          <option value="Buenos Aires">Buenos Aires</option>
          <option value="Sydney">Sydney</option>
          <option value="Praga">Praga</option>
          <option value="Boston">Boston</option>
          <option value="Tokio">Tokio</option>
        </select>
        <br />
        <CityImage city={citySelected === undefined ? "" : citySelected} />
      </div>
    );
  }
}

export default Destiny;
