import React from "react";

import styles from "./MenuMobile.module.scss";

export default function MenuMobile() {
  return (
    <React.Fragment>
      <div className={styles.overlay}></div>
      <div className={styles.mobile_menu}>
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
    </React.Fragment>
  );
}
