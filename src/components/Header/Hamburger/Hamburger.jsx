import React from "react";
import { useState } from "react";

import "./Hamburger.scss";

export default function Hamburger() {
  const [openHamburger, setOpenHamburger] = useState(false);

  const handleOpenHamburguer = () => {
    if (openHamburger) {
      setOpenHamburger(false);
    } else {
      setOpenHamburger(true);
    }
  };

  return (
    <div className={`hamburger-button ${openHamburger ? "open" : ""}`} onClick={handleOpenHamburguer}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
