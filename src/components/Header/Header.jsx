import React, { useState } from "react";
import Hamburger from "./Hamburger/Hamburger";
import Nav from "./Nav/Nav";

import "./Header.scss";

export default function Header() {
  const [openHamburgerMenu, setOpenHamburgerMenu] = useState(false);

  const onHamburguerClick = () => {
    setOpenHamburgerMenu(!openHamburgerMenu);
  };

  return (
    <header>
      <div className={`overlay ${openHamburgerMenu ? "fade-in" : "fade-out"}`}></div>
      <Hamburger onHamburguerClick={onHamburguerClick} openHamburgerMenu={openHamburgerMenu} />
      <Nav openHamburgerMenu={openHamburgerMenu} />
    </header>
  );
}
