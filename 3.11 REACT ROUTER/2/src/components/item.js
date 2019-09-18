import React from "react";
import { Link } from "react-router-dom";

let usersList;

const Item = props => {
  let users = props.users;
  usersList = users.map((user, index) => (
    <li className="item" key={index}>
      <div className="itemContent">
        <img src={user.picture.medium} alt={user.name.first}></img>
        <div className="content">
          <p>
            <b>{user.name.first}</b> {user.name.last}
          </p>
          <p>Ciudad: {user.location.city} </p>
          <p>Edad: {user.dob.age} años </p>
          <Link to={`/user/${user.id.name}`}>Ver Detalles</Link>
        </div>
      </div>
    </li>
  ));
  return usersList;
};

export default Item;
