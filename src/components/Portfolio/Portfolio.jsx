import React from "react";

import styles from "./Portfolio.module.scss";
import FoodDeliveryDevices from "../../assets/FoodDeliveryDevices.jpg";
import CurriculumDevices from "../../assets/CurriculumDevices.jpg";

export default function Portfolio() {
  return (
    <section className={styles.portfolio_container} id="portfolio">
      <div className={styles.portfolio}>
        <h2>03. Things I've Built</h2>
        <div className={styles.projects}>
          <div className={styles.project}>
            <img src={FoodDeliveryDevices} alt="" />
            <h3>Food Delivery App</h3>
            <p className={styles.description}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </p>
          </div>
          <div className={styles.project}>
            <img src={CurriculumDevices} alt="" />
            <h3>Curriculum App</h3>
            <p className={styles.description}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* <Card>
            <div className={styles.overlay}></div>
            <h3>Food Delivery App</h3>
            <Button
              url="https://github.com/Raquel-Almeida/food-delivery"
              alt="Food Delivery On Github"
              name="Show On Github"
            ></Button>
          </Card> */
}
