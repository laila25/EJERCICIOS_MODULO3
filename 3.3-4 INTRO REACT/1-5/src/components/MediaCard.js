import React from "react";
import logo from "../images/IMG_20190903_090249.jpg";
import "../stylesheets/mediacard.scss";

const mainText = (
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
);

const Mediacard = props => {
  return (
    <div className="App">
      <section className="App-card">
        <header className="App-header">
          <img src={props.image} className="App-header-img" alt="logo" />
          <section className="App-header-name">
            <h1 className="App-header-name-title">{props.name}</h1>
            <p className="App-header-name-text">{props.date}</p>
          </section>
        </header>
        <main className="App-main">{mainText}</main>
        <footer className="App-footer">
          <a
            className="App-footer-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Leer más...
          </a>
          <p>
            {props.likes} <i className="fas fa-heart App-footer-icon"></i>
          </p>
        </footer>
      </section>
    </div>
  );
};

const today = new Date();
const date =
  today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();

const MediaCardToRender = (
  <Mediacard name="Kira" date={date} image={logo} likes="35" />
);

export default MediaCardToRender;
