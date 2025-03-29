import React from "react";
import "./index.css";

export default function Navbar(props) {
  return (
    <nav className={props.darkMode ? "dark" : ""}>
      <img className="nav-icon" src="logo512.png" alt="react logo" />
      <h3 className="nav-logo-text">React Facts</h3>
      <h4 className="nav-title">React Course - Project 1</h4>
      <div className="toggler">
        <p className="toggler--light">Light</p>
        <div className="toggler--slider" onClick={props.toggleDarkMode}>
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
    </nav>
  );
}
