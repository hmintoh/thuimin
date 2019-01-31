import React from "react";
import resume from "../../assets/resume.pdf";
import styles from "./resume.module.css";

const Resume = () => {
  const ThingsIThinkAbout = [
    "technology & society - synergies and implications",
    "community and empowerment",
    "strategy",
    "personal growth and chasing learning curves"
  ];

  return (
    <div id="resume" className="light">
      <div className={styles.grid}>
        <div className={styles.grid_item}>
          <h2>What I can do</h2>
          <p>
            I develop mainly in Javascript with React and Node.js but am happy
            to pick up new technologies to develop what you need. I like to
            build applications that are intuitive, efficient and scalable. My
            goal is to focus on conveying the messsage you want to send.
          </p>
          <p className={styles.resumelink}>
            My resume is available for download{" "}
            <a href={resume} download>
              here
            </a>
            .
          </p>
        </div>
        <div className={styles.grid_item}>
          <h4>I spend my time thinking about:</h4>
          {ThingsIThinkAbout.map((item, key) => (
            <p>{item}</p>
          ))}

          <p>
            Knowledge sharing and community building are important to me. I
            volunteer for TechLadies, read my story{" "}
            <a
              href="http://blog.techladies.co/meet-min-techladies-bootcamp-organizer-coffee-lover-techlady/#.W_1lhRMzYWo"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
