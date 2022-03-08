import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/bundle";

import styles from "./Portfolio.module.scss";
import FoodDeliveryDevices from "../../assets/FoodDeliveryDevices.jpg";
import CurriculumDevices from "../../assets/CurriculumDevices.jpg";
import { FiGithub } from "react-icons/fi";

export default function Portfolio() {
  return (
    <section className={styles.portfolio_container} id="portfolio">
      <div className={styles.portfolio}>
        <h2>03. Things I've Built</h2>
        <div className={styles.projects}>
          <Swiper
            spaceBetween={300}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className={styles.project}>
                <a
                  href="https://raquel-almeida.github.io/food-delivery"
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
                  href="https://github.com/Raquel-Almeida/food-delivery"
                  alt="Food Delivery App On Github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub />
                </a>
                <p className={styles.description}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.project}>
                <a
                  href="https://raquel-almeida.github.io/curriculum"
                  alt="Curriculum App"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={CurriculumDevices} alt="Curriculum App Preview" />
                </a>
                <h3>Curriculum App</h3>
                <a
                  className={styles.github_link}
                  href="https://github.com/Raquel-Almeida/curriculum"
                  alt="Curriculum App On Github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub />
                </a>
                <p className={styles.description}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
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
