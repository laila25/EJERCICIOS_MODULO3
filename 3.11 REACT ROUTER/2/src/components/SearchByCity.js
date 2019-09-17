import React from "react";

let searchList;

const SearchByCity = props => {
  let users = props.users;
  searchList = users.map((user, index) => (
    <React.Fragment key={index}>
      <input
        type="checkbox"
        name="city"
        id={user.location.city}
        value={user.location.city}
        onChange={props.filterByCity}
      />
      <label htmlFor={user.location.city}>{user.location.city}</label>
      <br />
    </React.Fragment>
  ));
  return searchList;
};

export default SearchByCity;
