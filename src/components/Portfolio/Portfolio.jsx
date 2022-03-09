import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/bundle";

import { FiGithub } from "react-icons/fi";
import FoodDeliveryDevices from "../../assets/FoodDeliveryDevices.jpg";
import CurriculumDevices from "../../assets/CurriculumDevices.jpg";
import styles from "./Portfolio.module.scss";

export default function Portfolio() {
  return (
    <section className={styles.portfolio_container} id="portfolio">
      <div className={styles.portfolio}>
        <h2>04. Things I've Built</h2>
        <div className={styles.projects}>
          <Swiper
            spaceBetween={100}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className={styles.project}>
                <a
                  href="https://raquel-almeida.github.io/food-delivery/"
                  alt="Food Delivery App"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={FoodDeliveryDevices}
                    alt="Food Delivery App Preview"
                  />
                </a>
                <h3>Food Delivery App</h3>
                <a
                  className={styles.github_link}
                  href="https://github.com/Raquel-Almeida/food-delivery/"
                  alt="Food Delivery App On Github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub />
                </a>
                <p className={styles.description}>
                  Web app created using React, in which I created a mock API to
                  fetch the data used to build the meals list. The data returned
                  by the API was filled through HTTP request using Postman App.
                  You can add items to the cart and once you complete your
                  order, you'll receive a confirmation email.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.project}>
                <a
                  href="https://raquel-almeida.github.io/curriculum/"
                  alt="Curriculum App"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={CurriculumDevices} alt="Curriculum App Preview" />
                </a>
                <h3>Curriculum App</h3>
                <a
                  className={styles.github_link}
                  href="https://github.com/Raquel-Almeida/curriculum/"
                  alt="Curriculum App On Github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub />
                </a>
                <p className={styles.description}>
                  Web app created using React, where I present myself and all
                  the projects I've done so far.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
