import React from "react";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <div id="contact" className="dark">
      <h2>Let's connect.</h2>
      <p>
        Interested in working together? Feel free to get in touch at
        <strong> hmintoh@gmail.com</strong>
      </p>
      <a href="mailto:hmintoh@gmail.com" target="_blank">
        gmail
      </a>
      <a href="https://www.linkedin.com/in/huimintoh/" target="_blank">
        linkedin
      </a>
      <a href="https://github.com/hmintoh" target="_blank">
        github
      </a>
    </div>
  );
};

export default Contact;
