import React from "react";
import { Link } from "react-scroll";

import styles from "./Menu.module.scss";

export default function Menu(props) {
  return (
    <div className={styles.menu}>
      <Link to="about" smooth={true} offset={-100}>
        <span>01.</span> About
      </Link>
      <Link to="skills" smooth={true} offset={-100}>
        <span>02.</span> Skills
      </Link>
      <Link to="timeline" smooth={true} offset={-100}>
        <span>03.</span> Timeline
      </Link>
      <Link to="portfolio" smooth={true} offset={-100}>
        <span>04.</span> Portfolio
      </Link>
    </div>
  );
}
