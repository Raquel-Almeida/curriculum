import React from "react";
import Hamburger from "./Hamburger/Hamburger";
import Menu from "./Menu/Menu";

import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header>
      <Hamburger />
      <Menu />
    </header>
  );
}
