import React from "react";

import styles from "./Menu.module.scss";

export default function Menu(props) {
  return (
    <div className={styles.menu}>
      <a href="/">
        <span>01.</span> About
      </a>
      <a href="/">
        <span>02.</span> Timeline
      </a>
      <a href="/">
        <span>03.</span> Portfolio
      </a>
    </div>
  );
}
