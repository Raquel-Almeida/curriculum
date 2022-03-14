import React, { useState } from "react";

import { HiOutlineChevronDown } from "react-icons/hi";
import styles from "./Timeline.module.scss";

export default function Timeline() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const timelineData = [
    {
      job: "Groundforce",
      date: "From Oct. 2019 - Oct. 2020",
      role: "Check-in Agent and Gate Agent, at Lisbon Airport",
      description:
        "At this job I had the amazing opportunity to deal with people from all over the world and different cultures. I've learned to work under tremendous pressure. Some of my main responsabilities were to check passengers in, weighing and checking in their baggage, assigning seats, issuing boarding passes and luggage labels, monitoring jet way doors during boarding and disembarkation, assisting in customer service duties and many other tasks.",
    },
    {
      job: "Nova Ertek",
      date: "From Jun. 2018 - Oct. 2019",
      role: "Check-in Agent and Gate Agent, at Lisbon Airport",
      description:
        "At this job I had the amazing opportunity to deal with people from all over the world and different cultures. I've learned to work under tremendous pressure. Some of my main responsabilities were to check passengers in, weighing and checking in their baggage, assigning seats, issuing boarding passes and luggage labels, monitoring jet way doors during boarding and disembarkation, assisting in customer service duties and many other tasks.",
    },
  ];

  return (
    <section className={styles.timeline_container} id="timeline">
      <div className={styles.background_stripe}></div>
      <div className={styles.timeline}>
        <h2>03. Where I've Worked</h2>
        <div className={styles.accordion}>
          {timelineData.map((item, i) => (
            <div className={styles.job} key={i}>
              <div className={styles.title} onClick={() => toggle(i)}>
                <h4>
                  {item.job} <p>{item.date}</p>
                </h4>
                <div
                  className={
                    selected === i
                      ? styles["arrow"] + " " + styles["show"]
                      : styles["arrow"]
                  }
                >
                  <HiOutlineChevronDown />
                </div>
              </div>
              <p
                className={
                  selected === i
                    ? styles["job_description"] + " " + styles["show"]
                    : styles["job_description"]
                }
              >
                <i>
                  <b>Role:</b> {item.role}
                </i>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
