import React from "react";
import styles from "./jumbotron.module.css";

const Jumbotron = () => {
  return (
    <div id="jumbotron" className={styles.jumbotron}>
      <h1 className="animated slow fadeInUp">Hey there 👋</h1>
    </div>
  );
};

export default Jumbotron;
