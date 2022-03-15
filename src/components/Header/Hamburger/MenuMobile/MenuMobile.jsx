import React from "react";
import { Link } from "react-scroll";

import styles from "./MenuMobile.module.scss";

export default function MenuMobile(props) {
  return (
    <React.Fragment>
      <div className={styles.overlay}></div>
      <div className={styles.mobile_menu}>
        <Link
          to="about"
          smooth={true}
          offset={-100}
          onClick={props.onLinkClick}
        >
          About
        </Link>
        <Link
          to="skills"
          smooth={true}
          offset={-100}
          onClick={props.onLinkClick}
        >
          Skills
        </Link>
        <Link
          to="timeline"
          smooth={true}
          offset={-100}
          onClick={props.onLinkClick}
        >
          Timeline
        </Link>
        <Link
          to="portfolio"
          smooth={true}
          offset={-100}
          onClick={props.onLinkClick}
        >
          Portfolio
        </Link>
      </div>
    </React.Fragment>
  );
}
