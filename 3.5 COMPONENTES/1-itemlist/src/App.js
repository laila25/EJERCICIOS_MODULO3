import React from "react";
import "./App.css";
import Item from "./Item";
import items from "./items";

const cardListFilter = items.filter(item => item.price < 10);

const cardList = items.map((item, index) => {
  return (
    <li key={index}>
      <Item
        key={index}
        name={item.name}
        description={item.description}
        quantity={item.quantity}
        category={item.category}
        price={item.price}
      />
    </li>
  );
});

class App extends React.Component {
  render() {
    return <ul className="item-list">{cardList}</ul>;
  }
}

export default App;
