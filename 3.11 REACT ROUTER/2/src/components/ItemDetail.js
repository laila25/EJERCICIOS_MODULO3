import React from "react";

const ItemDetails = props => {
  console.log(props);
  return (
    <div className="itemContent">
      <img src={props.user.picture.medium} alt=""></img>
      <div className="content">
        <p>
          <b>{props.user.name.first}</b>
        </p>
        <p>Ciudad: {props.user.location.city} </p>
        <p>Edad: {props.user.dob.age} años </p>
      </div>
    </div>
  );
};

export default ItemDetails;
