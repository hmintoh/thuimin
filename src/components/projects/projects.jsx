import React from "react";
import styles from "./projects.module.css";

const Projects = () => {
  return (
    <div id="projects" className="dark">
      <h2>Selected Projects</h2>

      <div className={styles.grid}>
        <div className={styles.grid_item}>
          <p>
            <h4>TechLadies</h4>(2017)
          </p>
          <h5>Platform to manage Bootcamp applications</h5>
          <p>Group Project. Built with Ruby on Rails, PostgreSQL</p>
          <p>
            View recording of app demo{" "}
            <a
              href="https://engineers.sg/video/team-techladies-techladies-bootcamp-3--2228"
              target="_blank"
            >
              here
            </a>
          </p>
          <a href="http://www.bootcamp.techladies.co" target="_blank">
            Site
          </a>
        </div>

        <div className={styles.grid_item}>
          <p>
            <h4>Wellderly</h4>(2018)
          </p>
          <h5>Digital marketplace for elderly care and related services</h5>
          <p>
            Group project practising agile and TDD. Built with React, Express,
            Node.js, MongoDB
          </p>
          <p>
            use with <b>user@user.com,</b> pw:<b> user</b>
          </p>
          <a
            href="https://auto-wellderly.herokuapp.com/catalogue"
            target="_blank"
          >
            Site
          </a>
        </div>

        <div className={styles.grid_item}>
          <p>
            <h4>Eventix</h4>(WIP)
          </p>
          <h5>Ticketing platform for musical shows, performances and events</h5>
          <p>Built with React, Express, Node.js, MongoDB</p>
        </div>

        <div className={styles.grid_item}>
          <p>
            <h4>Prototype</h4>(2018)
          </p>
          <h5>Static webpage</h5>
          <p>Built with Ruby on Rails, CSS Grid</p>
          <a href="http://www.prototypes.sg/" target="_blank">
            Site
          </a>
        </div>

        <div className={styles.grid_item}>
          <p>
            <h4>Chicago Global Wealth</h4>(2019)
          </p>
          <h5>Static webpage</h5>
          <p>Built with React, CSS Grid</p>
          <p>
            <a href="https://www.chicagoglobalstrategies.com/" target="_blank">
              Site
            </a>
          </p>
        </div>

        <div className={styles.grid_item}>
          <p>
            <h4>Lambda</h4>(2017)
          </p>
          <h5>Static webpage</h5>
          <p>Built with HTML/CSS, Bootstrap</p>
          <a href="https://lambda-sg.netlify.com" target="_blank">
            Site
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
