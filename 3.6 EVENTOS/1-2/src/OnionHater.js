import React from "react";
import "./App.css";

const onChangeListener = event => {
  const value = event.target.value;
  console.log(value);
  if (value.includes("cebolla")) {
    alert("ODIO LA CEBOLLA");
  }
};

class OnionHater extends React.Component {
  render() {
    return (
      <div>
        <label>¿Qué te parece la cebolla?</label>
        <br />
        <input type="textarea" name="textarea" onChange={onChangeListener} />
      </div>
    );
  }
}

export default OnionHater;
