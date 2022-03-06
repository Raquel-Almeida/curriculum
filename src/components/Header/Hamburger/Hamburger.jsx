import React, { useState } from "react";

import MenuMobile from "./MenuMobile/MenuMobile";

import styles from "./Hamburger.module.scss";

export default function Hamburger(props) {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const onHamburguerClick = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  return (
    <React.Fragment>
      <div className={`${styles.hamburger_button} ${openMobileMenu ? styles.open : 'fade_out'}`} onClick={onHamburguerClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {openMobileMenu ? <MenuMobile /> : ''}
    </React.Fragment>
    
  );  
}
