import React from "react";

import "./Hamburger.scss";

export default function Hamburger(props) {
  return (
    <div className={`hamburger-button ${props.openHamburgerMenu ? "open" : ""}`} onClick={props.onHamburguerClick}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
