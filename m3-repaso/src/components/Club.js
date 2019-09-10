import React from "react";

class Club extends React.Component {
  render() {
    let members = this.props.clubMembers.map(member => {
      return <li>· {member}</li>;
    });
    return (
      <div className="item">
        <i className={`icon ${this.props.fa}`}></i>
        <div className="text">
          <h1>{this.props.clubName}</h1>
          <p>Members:</p>
          <ul className="itemList">{members}</ul>
        </div>
      </div>
    );
  }
}

export default Club;
