import React from "react";
import logo from "./IMG_20190903_090249.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <section className="App-card">
        <header className="App-header">
          <img src={logo} className="App-header-img" alt="logo" />
          <section className="App-header-name">
            <h1 className="App-header-name-title">Kira</h1>
            <p className="App-header-name-text">
              Miércoles 04 de Septiembre de 2019
            </p>
          </section>
        </header>
        <main className="App-main">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </main>
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
            37 <i className="fas fa-heart App-footer-icon"></i>
          </p>
        </footer>
      </section>
    </div>
  );
}

export default App;
