import React, { Component } from "react";
import "./navbar.css";

let lastScrollTop = 0;

class Navbar extends Component {
  constructor() {
    super();
    this.state = { navbar: "animated fadeInDown" };
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll, true);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll, true);
  };

  handleScroll = event => {
    const currentScrollTop = window.pageYOffset;

    if (currentScrollTop > lastScrollTop) {
      this.setState({ navbar: "animated fadeOutUp" });
    } else {
      this.setState({ navbar: "animated fadeInDown" });
    }
    lastScrollTop = currentScrollTop;
  };

  render() {
    return (
      <div
        id="nav"
        className={`navbar ${this.state.navbar}`}
        onScroll={this.handleScroll}>
        <div className="wrapper">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          <a href="#press">Press</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    );
  }
}

export default Navbar;
