import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

class Club extends React.Component {
  render() {
    let members = this.props.clubMembers.map((member, index) => {
      return <li key={index}>· {member}</li>;
    });
    return (
      <div className="item">
        <i className={`icon ${this.props.fa}`}></i>
        <div className="text">
          <h2>{this.props.clubName}</h2>
          <p>Members:</p>
          <ul className="itemList">{members}</ul>
        </div>
      </div>
    );
  }
}

export default Club;
