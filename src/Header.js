import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <section className="navbar">
        <section className="navbar--home">
          <img className="icons" src="./circus.svg" alt="Home logo" />
          <p>Home</p>
        </section>
        <h2>Hula Heaven</h2>
        <section className="navbar--restart">
          <img className="icons" src="./restart.svg" alt="Restart logo" />
          <p>Restart</p>
        </section>
      </section>
      <img className="elipses" src="./elipses.png" alt="elipses" />
    </header>
  );
};

export default Header;
