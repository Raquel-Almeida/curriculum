import React from "react";

import profilePhoto from "../../../assets/profile-photo.jpg";
import "./Home.scss";

export default function Home() {
  return (
    <section className="home">
      <div className="profile">
        <img className="profile-photo" src={profilePhoto} alt="Profile"></img>
        <div className="about-me-container"> 
          <p className="job">Front-End Web Developer</p>
          <p className="name">Raquel Almeida</p>
          <p className="about-me">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </div>
    </section>
  );
}
