import React from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

import styles from "./Portfolio.module.scss";

export default function Portfolio() {
  return (
    <section className={styles.portfolio}>
      <div className={styles.projects_container}>
        <h2>03. Some Things I've Built</h2>
        <div className={styles.projects}>
          <Card>
            <div className={styles.overlay}></div>
            <h3>Food Delivery App</h3>
            <Button>
              <a
                href="https://github.com/Raquel-Almeida/food-delivery"
                alt="Food Delivery On Github"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code On Github
              </a>
            </Button>
          </Card>
          <Card>
            <div className={styles.overlay}></div>
            <h3>Curriculum App</h3>
            <Button>
              <a
                href="https://github.com/Raquel-Almeida/curriculum"
                alt="Curriculum On Github"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code On Github
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
