import React from "react";

import profilePhoto from "../../assets/ProfilePhoto.jpg";
import styles from "./About.module.scss";

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.profile}>
        <img
          className={styles.profile_photo}
          src={profilePhoto}
          alt="Profile"
        ></img>
        <div className={styles.about_me_container}>
          <p className={styles.job}>Front-End Web Developer</p>
          <h1 className={styles.name}>
            Hi, I'm Raquel Almeida. Nice to meet you.
          </h1>
          <p className={styles.about_me}>
            I'm extremely motivated to constantly improve my skills, overcome
            hurdles and grow professionally. I enjoy working in a team
            enviroment and I do well under pressure. In my spare time I love to
            travell, discover new places and cultures, watch movies and series
            and collect vinyl records.
          </p>
        </div>
      </div>
    </section>
  );
}
