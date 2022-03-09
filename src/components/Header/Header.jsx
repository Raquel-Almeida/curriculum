import React from "react";

import Hamburger from "./Hamburger/Hamburger";
import Menu from "./Menu/Menu";

import "./Header.module.scss";

export default function Header() {
  return (
    <header>
      <Hamburger />
      <Menu />
    </header>
  );
}
