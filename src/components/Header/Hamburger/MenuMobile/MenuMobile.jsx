import React from "react";
import { Link } from "react-scroll";

import styles from "./MenuMobile.module.scss";

export default function MenuMobile(props) {
  return (
    <React.Fragment>
      <div className={styles.overlay}></div>
      <div className={styles.mobile_menu}>
        <Link to="about" smooth={true} onClick={props.onLinkClick}>
          <span>01.</span> About
        </Link>
        <Link to="timeline" smooth={true} onClick={props.onLinkClick}>
          <span>02.</span> Timeline
        </Link>
        <Link to="portfolio" smooth={true} onClick={props.onLinkClick}>
          <span>03.</span> Portfolio
        </Link>
      </div>
    </React.Fragment>
  );
}
