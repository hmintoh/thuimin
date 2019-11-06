import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div id="about" className="light">
        <div className="wrapper">
          <h4>
            Hi, I'm Min - a full stack web developer, currently based in
            Singapore. I like to design and build applications that are
            beautiful, high-quality and robust. With my work I strive for the
            sweet spot where intention, empathy, design and technology converge.
          </h4>

          <h4>The Site</h4>
          <p>
            This is where I prototype and showcase some of the projects I have
            worked/ am working on. This site is a constant work in progress as I
            continue to tweak and add content.
          </p>
          <p>
            The code is available on{" "}
            <a
              href="https://github.com/hmintoh/thuimin"
              target="_blank"
              rel="noopener noreferrer">
              Github
            </a>{" "}
            and hosted on Netlify.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
