import React from "react";
import avatar from "../../assets/avatar.jpeg";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#resume">Resume</a>
      <a href="#contact">Contact</a>
    </div>
  );
};

export default Navbar;
