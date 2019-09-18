import React from "react";

const Item = props => {
  return (
    <li>
      <img src="https://robohash.org/abcde" />
      <p>{props.name}</p>
      <p>sincere@april.biz</p>
    </li>
  );
};

export default Item;
