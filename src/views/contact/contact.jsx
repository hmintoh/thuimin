import React from "react";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import gmail from "../../assets/gmail.svg";
import devto from "../../assets/devto.svg";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <div id="contact" className="light">
      <div className="wrapper">
        <h2>Let's connect.</h2>
        <p>
          Please get in touch at<strong> hmintoh@gmail.com</strong>.
        </p>

        <ul className={styles.socialsList}>
          <li>
            <a
              href="mailto:hmintoh@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Gmail">
              <img src={gmail} alt="gmail" className={styles.image} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/hmintoh"
              target="_blank"
              rel="noopener noreferrer"
              title="Github">
              <img src={github} alt="github" className={styles.image} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/huimintoh/"
              target="_blank"
              rel="noopener noreferrer"
              title="Linkedin">
              <img src={linkedin} alt="linkedin" className={styles.image} />
            </a>
          </li>
          <li>
            <a
              href="https://dev.to/hmintoh"
              target="_blank"
              rel="noopener noreferrer"
              title="Dev.To">
              <img src={devto} alt="linkedin" className={styles.image} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
