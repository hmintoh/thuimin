import React from "react";
import "./footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>copyright &copy; {currentYear} thm. all rights reserved</p>
    </footer>
  );
};

export default Footer;
