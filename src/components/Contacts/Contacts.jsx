import React from "react";

import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiCodepen } from "react-icons/fi";
import styles from "./Contacts.module.scss";

export default function Contacts() {
  return (
    <ul className={styles.contacts}>
      <li>
        <a
          href="https://github.com/Raquel-Almeida"
          alt="Github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/raquelalmeida95"
          alt="Linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiLinkedin />
        </a>
      </li>
      <li>
        <a
          href="https://codepen.io/RaquelAlmeida"
          alt="Codepen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiCodepen />
        </a>
      </li>
    </ul>
  );
}
