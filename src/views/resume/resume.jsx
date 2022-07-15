import React from "react";
import resume from "../../assets/resume.pdf";
import styles from "./resume.module.css";

const Resume = () => {
  const ThingsIThinkAbout = [
    "intuitive tech; bridging the gap betwen physical and digital interfaces",
    "user experience and human-centered design",
    "community and empowerment",
    "diversity in tech and businesses",
    "personal growth and chasing learning curves",
  ];

  return (
    <div id="resume" className="light">
      <div className="wrapper">
        <div className={styles.grid}>
          <div className={styles.grid_item}>
            <h2>What I can do</h2>
            <p>
              I develop mainly in Javascript with React, Vue and Node.js but am
              happy to pick up new technologies. Currently picking up Typescript
              and styled components.
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
            <p className="heading--h4">I spend my time thinking about:</p>
            <ul>
              {ThingsIThinkAbout.map((item, key) => (
                <li key={key}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
