import React from "react";

import styles from "./ContactsMobile.module.scss";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

export default function ContactsMobile() {
  return (
    <ul className={styles.contacts_mobile}>
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
          href="https://www.linkedin.com/in/raquelalmeida95/"
          alt="Linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiLinkedin />
        </a>
      </li>
    </ul>
  );
}
