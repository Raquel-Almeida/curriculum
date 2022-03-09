import React from "react";

import HTMLIcon from "../../assets/Skills Icons/HTML.png";
import CSSIcon from "../../assets/Skills Icons/CSS.png";
import JavaScriptIcon from "../../assets/Skills Icons/JavaScript.png";
import ReactIcon from "../../assets/Skills Icons/React.png";
import AngularIcon from "../../assets/Skills Icons/Angular.png";
import SassIcon from "../../assets/Skills Icons/Sass.png";
import GitIcon from "../../assets/Skills Icons/Git.png";
import PhotoshopIcon from "../../assets/Skills Icons/Photoshop.png";
import styles from "./Skills.module.scss";

export default function Skills() {
  return (
    <section className={styles.skills_container} id="skills">
      <div className={styles.skills}>
        <h2>02. Skills & Courses</h2>
        <h3>Some Of The Technologies I've Learned</h3>
        <div className={`${styles.card} ${styles.techs}`}>
          <div className={styles.tech}>
            <img src={HTMLIcon} alt="HTML" />
            <p>HTML</p>
          </div>
          <div className={styles.tech}>
            <img src={CSSIcon} alt="CSS" />
            <p>CSS</p>
          </div>
          <div className={styles.tech}>
            <img src={JavaScriptIcon} alt="JavaScript" />
            <p>JavaScript</p>
          </div>
          <div className={styles.tech}>
            <img src={ReactIcon} alt="React" />
            <p>React</p>
          </div>
          <div className={styles.tech}>
            <img src={AngularIcon} alt="Angular" />
            <p>Angular</p>
          </div>
          <div className={styles.tech}>
            <img src={SassIcon} alt="Sass" />
            <p>Sass</p>
          </div>
          <div className={styles.tech}>
            <img src={GitIcon} alt="Git" />
            <p>Git</p>
          </div>
          <div className={styles.tech}>
            <img src={PhotoshopIcon} alt="Photoshop" />
            <p>Photoshop</p>
          </div>
        </div>
        <h3>Courses I've Taken</h3>
        <div className={`${styles.card} ${styles.courses}`}>
          <div className={styles.course}>
            <h4>
              Specialized Front-End Web Developer
              <p>Professional Qualification</p>
            </h4>
            <h5>
              <a
                className={styles.course_link}
                href="https://flag.pt/curso/especializado-front-end-web-developer/"
                alt="Flag"
                target="_blank"
                rel="noopener noreferrer"
              >
                Flag
              </a>
            </h5>
            <ul>
              <li>UI/UX</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Sass</li>
              <li>Responsive</li>
              <li>Angular</li>
              <li>React</li>
              <li>Git</li>
            </ul>
          </div>
          <div className={styles.course}>
            <h4>Introduction To coding</h4>
            <h5>
              <a
                className={styles.course_link}
                href="https://www.shecodes.io/"
                alt="SheCodes"
                target="_blank"
                rel="noopener noreferrer"
              >
                SheCodes
              </a>
            </h5>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>ES6</li>
              <li>VS Code</li>
            </ul>
          </div>
          <div className={styles.course}>
            <h4>React - The Complete Guide</h4>
            <h5>
              <a
                className={styles.course_link}
                href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
                alt="Udemy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Udemy
              </a>
            </h5>
            <ul>
              <li>Reactjs</li>
              <li>Hooks</li>
              <li>Redux</li>
              <li>Routing</li>
              <li>Animations</li>
              <li>Next.js</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
