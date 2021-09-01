import React from "react";
import styles from "./jumbotron.module.css";

const Jumbotron = () => {
  return (
    <div id="jumbotron" className={styles.jumbotron}>
      <h1 className="animated slow fadeInUp">
        Hi there{" "}
        <span role="img" aria-label="wave">
          👋
        </span>
      </h1>
    </div>
  );
};

export default Jumbotron;
