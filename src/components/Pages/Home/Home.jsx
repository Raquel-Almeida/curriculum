import React from "react";

import profilePhoto from "../../../assets/profile-photo.jpg";
import "./Home.scss";

export default function Home() {
  return (
    <div className="home">
      <img className="profile-photo" src={profilePhoto} alt="Profile"></img>
      <p>About me</p>
    </div>
  );
}
