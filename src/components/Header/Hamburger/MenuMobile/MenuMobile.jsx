import React from 'react'

import styles from "./MenuMobile.module.scss";

export default function MenuMobile() {
  return (
    <React.Fragment>
      <div className={styles.overlay}></div>
      <div className={styles.mobile_menu}>
        <a href="/#about"><span>01.</span> About</a>
        <a href="/#portfolio"><span>02.</span> Portfolio</a>
        <a href="/#contacts"><span>03.</span> Contacts</a>
      </div>
    </React.Fragment>
  )
}
