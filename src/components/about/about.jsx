import React from "react";
import styles from "./about.module.css";

const About = () => {
  return (
    <div id="about" className="light">
      <h4>
        Hi, I'm Min - a self taught full stack web developer, currently based in
        Singapore. I enjoy coffee, books, documentaries and meaningful
        conversations.
      </h4>

      <h3>The Site</h3>
      <p>
        This is where I prototype and showcase some of the projects I had/am
        working on. The site is a constant work in progress as I tweak and add
        more content.
      </p>
      <p>
        This site is available on
        <a href="https://github.com/hmintoh/personal-thuimin" target="_blank">
          Github
        </a>
        and hosted on Github Pages.
      </p>
    </div>
  );
};

export default About;
