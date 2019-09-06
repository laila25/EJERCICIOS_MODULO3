import React from "react";
import MediaCard from "./MediaCard";
import logo from "../images/IMG_20190903_090249.jpg";

const today = new Date();
const date =
  today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();

const MediaCardToRender1 = (
  {Mediacard name="Kira", date={date}, image={logo}, likes="35"}
);
const MediaCardToRender2 = (
  <Mediacard name="Luna" date={date} image={logo} likes="25" />
);

class MediaList extends React.Component {
  render() {
    return (
      <section className="section-cards">
        <h1>All My Dogs</h1>
        <ul className="section-cats_list">
          <li>{MediaCardToRender1}</li>
          <li>{MediaCardToRender2}</li>
        </ul>
      </section>
    );
  }
}

export default MediaList;
