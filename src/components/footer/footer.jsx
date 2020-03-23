import React from "react";
import "./footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <span>copyright &copy; {currentYear} thm. all rights reserved</span>
    </footer>
  );
};

export default Footer;
