import React from "react";
import RandomCats from "./RandomCats";

class CatList extends React.Component {
  render() {
    return (
      <section className="section-cats">
        <h1>All Cats Are Beautiful</h1>
        <ul className="section-cats_list">
          <li>
            <RandomCats />
          </li>
          <li>
            <RandomCats />
          </li>
          <li>
            <RandomCats />
          </li>
        </ul>
      </section>
    );
  }
}

export default CatList;
