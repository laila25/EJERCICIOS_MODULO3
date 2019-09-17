import React from "react";
import Item from "./item";

const ItemList = props => {
  return (
    <React.Fragment>
      <p>USERS</p>
      <ul>
        <Item users={props.users} filterByUser={props.filterByUser} />
      </ul>
    </React.Fragment>
  );
};

export default ItemList;
