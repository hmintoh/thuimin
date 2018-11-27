import React from "react";
import styles from "./about.module.css";

const About = () => {
  return (
    <div id="about" className="light">
      <h4>
        Hi there, I'm Min - a full stack web developer, currently based in
        Singapore. I like building websites that are beautiful, high-quality and
        robust. With my work I strive for that sweet spot where intention,
        empathy, design and technology converge.
      </h4>

      <p>
        I am intrigued by strategy, technology vs. society and social change. I
        enjoy coffee, music and meaningful conversations.
      </p>

      <h5>The Site</h5>
      <p>
        This is where I prototype and showcase some of the projects I had
        worked/am working on. This site is a constant work in progress as I
        tweak and add content.
      </p>
      <p>
        The code is available on{" "}
        <a href="https://github.com/hmintoh/thuimin" target="_blank">
          Github
        </a>{" "}
        and hosted on Github Pages.
      </p>
    </div>
  );
};

export default About;
