import React from "react";

import styles from "./Timeline.module.scss";

export default function Timeline() {
  return (
    <div className={styles.timeline_container} id="timeline">
      <div className={styles.timeline}>
        <h2>03. Where I've Worked</h2>
        <div>A</div>
        <div>B</div>
        <div>C</div>
      </div>
    </div>
  );
}
