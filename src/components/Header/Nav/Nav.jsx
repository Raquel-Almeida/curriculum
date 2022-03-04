import React from "react";

import "./Nav.scss";

export default function Nav(props) {
  return (
    <div className={`nav ${props.openHamburgerMenu ? "mobile-menu" : "menu-hidden"}`}>
      <a href="/">Home</a>
      <a href="/">About</a>
      <a href="/">Portfolio</a>
      <a href="/">Contacts</a>
    </div>
  );
}
