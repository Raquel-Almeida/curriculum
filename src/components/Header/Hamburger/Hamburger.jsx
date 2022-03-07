import React, { useState } from "react";
import MenuMobile from "./MenuMobile/MenuMobile";

import styles from "./Hamburger.module.scss";

export default function Hamburger(props) {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [wasOpen, setWasOpen] = useState(false);

  const onHamburguerClick = () => {
    setOpenMobileMenu(!openMobileMenu);
    setWasOpen(true);
  };

  return (
  <React.Fragment>
    <div className={`${styles.hamburger_button} ${openMobileMenu ? styles.open : ''}`} onClick={onHamburguerClick}>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div className={ openMobileMenu ? styles.fade_in : wasOpen ? styles.fade_out : styles.hidden }>
      <MenuMobile />
    </div>
  </React.Fragment>
  );  
}
