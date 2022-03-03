import React from "react";
import Hamburger from "./Hamburger/Hamburger";

import "./Header.scss";

export default function Header() {
  return (
    <header>
      <div className="nav">
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Portfolio</a>
        <a href="/">Contacts</a>
      </div>
      <Hamburger />
    </header>
  );
}
