import React from "react";
import Button from "../UI/Button/Button";

import profilePhoto from "../../assets/ProfilePhoto.jpg";
import styles from "./About.module.scss";

export default function About() {
  return (
    <section className={styles.about}>
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
            Gosto pelo trabalho em equipa, autonomia, ambição, boa capacidade de
            comunicação oral e escrita, facilidade de aprendizagem. Capacidade
            de trabalhar sob pressão e múltiplas tarefas. Extremamente motivada
            para melhorar constantemente as minhas competências e crescer
            profissionalmente.
          </p>
        </div>
        <Button
          url="https://www.google.com/"
          alt="CV"
          name="Download CV"
        ></Button>
      </div>
    </section>
  );
}
