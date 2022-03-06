import React from "react";

import profilePhoto from "../../assets/profile-photo.jpg";

import styles from "./About.module.scss";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.profile}>
        <img className={styles.profile_photo} src={profilePhoto} alt="Profile"></img>
        <div className={styles.about_me_container}> 
          <p className={styles.job}>Front-End Web Developer</p>
          <p className={styles.name}>Raquel Almeida</p>
          <p className={styles.about_me}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </div>
    </section>
  );
}
