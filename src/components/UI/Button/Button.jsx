import React from "react";

import styles from "./Button.module.scss";

export default function Button(props) {
  return (
    <a
      className={styles.button}
      href={props.url}
      alt={props.alt}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.name}
    </a>
  );
}
