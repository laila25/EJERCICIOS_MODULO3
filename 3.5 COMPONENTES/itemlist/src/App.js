import React from "react";
import "./App.css";
import Item from "./Item";

const items = [
  {
    name: "Cereales con chocolate",
    description: "Cereales rellenos de chocolate",
    quantity: 2,
    category: "Cereales",
    price: 5
  },
  {
    name: "Hamburguesa con queso",
    description: "Hamburguesa rica y saludable",
    quantity: 1,
    category: "Fast-food",
    price: 15
  },
  {
    name: "Agua mineral",
    description: "Agua de un charco del Himalaya",
    quantity: 2,
    category: "Bebida",
    price: 5
  },
  {
    name: "Sopa de Pollo",
    description: "Sopa de sobre de fideos con sabor a pollo",
    quantity: 4,
    category: "Comida seca",
    price: 2.5
  }
];

let content = [];

class App extends React.Component {
  render() {
    for (let i = 0; i < items.length; i++) {
      content += (
        <li>
          <Item
            name={items[i].name}
            description={items[i].description}
            quantity={items[i].quantity}
            category={items[i].category}
            price={items[i].price}
          />
        </li>
      );
    }
    return (
      <ul className="item-list">
        {content}
        <li>
          <Item
            name={items[0].name}
            description={items[0].description}
            quantity={items[0].quantity}
            category={items[0].category}
            price={items[0].price}
          />
        </li>
        <li>
          <Item
            name={items[1].name}
            description={items[1].description}
            quantity={items[1].quantity}
            category={items[1].category}
            price={items[1].price}
          />
        </li>
        <li>
          <Item
            name={items[2].name}
            description={items[2].description}
            quantity={items[2].quantity}
            category={items[2].category}
            price={items[2].price}
          />
        </li>
        <li>
          <Item
            name={items[3].name}
            description={items[3].description}
            quantity={items[3].quantity}
            category={items[3].category}
            price={items[3].price}
          />
        </li>
      </ul>
    );
  }
}

export default App;
