import React from "react";

import styles from "./Timeline.module.scss";

export default function Timeline() {
  return (
    <section className={styles.timeline_container} id="timeline">
      <div className={styles.timeline}>
        <h2>03. Where I've Worked</h2>
        <div className={styles.card}>
          <div className={styles.job}>
            <h4>
              Groundforce
              <p>From Oct. 2019 - Oct. 2020</p>
            </h4>
            <p className={styles.job_description}>
              <i>
                <b>Role:</b> Check-in Agent and Gate Agent, at Lisbon Airport
              </i>
              At this job I had the amazing opportunity to deal with people from
              all over the world and different cultures. I've learned to work
              under tremendous pressure. Some of my main responsabilities were
              to check passengers in, weighing and checking in their baggage,
              assigning seats, issuing boarding passes and luggage labels,
              monitoring jet way doors during boarding and disembarkation,
              assisting in customer service duties and many other tasks.
            </p>
          </div>
          <div className={styles.job}>
            <h4>
              Nova Ertek
              <p>From Jun. 2018 - Oct. 2019</p>
            </h4>
            <p className={styles.job_description}>
              <i>
                <b>Role:</b> Check-in Agent and Gate Agent, at Lisbon Airport
              </i>
              At this job I had the amazing opportunity to deal with people from
              all over the world and different cultures. I've learned to work
              under tremendous pressure. Some of my main responsabilities were
              to check passengers in, weighing and checking in their baggage,
              assigning seats, issuing boarding passes and luggage labels,
              monitoring jet way doors during boarding and disembarkation,
              assisting in customer service duties and many other tasks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
