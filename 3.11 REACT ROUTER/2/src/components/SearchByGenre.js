import React from "react";

const SearchByGenre = props => {
  return (
    <React.Fragment>
      <input
        type="checkbox"
        name="gender"
        id="gender1"
        value="male"
        onChange={props.filterByGenre}
      />
      <label htmlFor="gender1">Hombre</label>
      <br />
      <input
        type="checkbox"
        name="gender"
        id="gender2"
        value="female"
        onChange={props.filterByGenre}
      />
      <label htmlFor="gender2">Mujer</label>
    </React.Fragment>
  );
};

export default SearchByGenre;
