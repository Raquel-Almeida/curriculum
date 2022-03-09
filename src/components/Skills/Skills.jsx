import React from "react";

import HTMLIcon from "../../assets/Skills Icons/HTML.png";
import CSSIcon from "../../assets/Skills Icons/CSS.png";
import JavaScriptIcon from "../../assets/Skills Icons/JavaScript.png";
import ReactIcon from "../../assets/Skills Icons/React.png";
import AngularIcon from "../../assets/Skills Icons/Angular.png";
import SassIcon from "../../assets/Skills Icons/Sass.png";
import GitIcon from "../../assets/Skills Icons/Git.png";
import styles from "./Skills.module.scss";

export default function Skills() {
  return (
    <section className={styles.skills_container} id="skills">
      <div className={styles.skills}>
        <h2>02. Skills & Courses I've Taken</h2>
        <h3>Some of the technologies I've learned:</h3>
        <div className={styles.card}>
          <div className={styles.skill}>
            <img src={HTMLIcon} alt="HTML" />
            <p>HTML</p>
          </div>
          <div className={styles.skill}>
            <img src={CSSIcon} alt="CSS" />
            <p>CSS</p>
          </div>
          <div className={styles.skill}>
            <img src={JavaScriptIcon} alt="JavaScript" />
            <p>JavaScript</p>
          </div>
          <div className={styles.skill}>
            <img src={ReactIcon} alt="React" />
            <p>React</p>
          </div>
          <div className={styles.skill}>
            <img src={AngularIcon} alt="Angular" />
            <p>Angular</p>
          </div>
          <div className={styles.skill}>
            <img src={SassIcon} alt="Sass" />
            <p>Sass</p>
          </div>
          <div className={styles.skill}>
            <img src={GitIcon} alt="Git" />
            <p>Git</p>
          </div>
        </div>
      </div>
    </section>
  );
}
