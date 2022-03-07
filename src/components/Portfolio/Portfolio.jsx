import React from "react";
import Card from "../UI/Card/Card";

import styles from "./Portfolio.module.scss";

export default function Portfolio() {
  return (
    <section className={styles.portfolio}>
      <div className={styles.projects_container}>
        <h2>03. Some Things I've Built</h2>
        <div className={styles.projects}>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    </section>
  );
}
