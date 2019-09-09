import React from "react";

const onChangeListener = ev => {
  const citySelected = ev.currentTarget.value;
  alert(`Tu destino es viajar a ${citySelected}`);
};

class Destiny extends React.Component {
  render() {
    return (
      <div>
        <select onChange={onChangeListener}>
          <option value="">Elige una ciudad</option>
          <option value="Buenos Aires">Buenos Aires</option>
          <option value="Sydney">Sydney</option>
          <option value="Praga">Praga</option>
          <option value="Boston">Boston</option>
          <option value="Tokio">Tokio</option>
        </select>
      </div>
    );
  }
}

export default Destiny;
