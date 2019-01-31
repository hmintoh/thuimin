import React from "react";
import github from "../../assets/Github.png";
import linkedin from "../../assets/Linkedin.png";
import gmail from "../../assets/Gmail.png";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <div id="contact" className="dark">
      <h2>Let's connect.</h2>
      <p>
        Interested in working together? Feel free to get in touch at
        <strong> hmintoh@gmail.com</strong>
      </p>

      <a
        href="mailto:hmintoh@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={gmail} alt="gmail" className={styles.image} />
      </a>

      <a
        href="https://github.com/hmintoh"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={github} alt="github" className={styles.image} />
      </a>

      <a
        href="https://www.linkedin.com/in/huimintoh/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedin} alt="linkedin" className={styles.image} />
      </a>
    </div>
  );
};

export default Contact;
