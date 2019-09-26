import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <section className="navbar">
        <section className="navbar--home">
          <img src="./circus.svg" alt="Home logo" />
          <p>Home</p>
        </section>
        <h2>Hula Heaven</h2>
        <section className="navbar--restart">
          <img src="./restart.svg" alt="Restart logo" />
          <p>Restart</p>
        </section>
      </section>
      <img className="elipses" src="./Elipses.png" alt="elipses" />
    </header>
  );
};

export default Header;
