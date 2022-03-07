import React from "react";
import ContactsMobile from "./ContactsMobile/ContactsMobile";

import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer>
      <ContactsMobile />
      <p>Designed and built by Raquel Almeida</p>
      <p>© 2022</p>
    </footer>
  );
}
