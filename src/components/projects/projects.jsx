import React from "react";
import styles from "./projects.module.css";

const Projects = () => {
  // <div class="grid-item">
  //   <h4>Prototype</h4>
  //   <p>Built with Ruby on Rails, CSS Grid</p>
  //   <p>Site <a href="http://www.prototypes.sg/" target="_blank">here.</a></p>
  // </div>

  return (
    <div id="projects" className="dark">
      <h2>Selected Projects</h2>
      <p>
        It is important that I am chasing learning curves, so you will always
        find me working on a side project.
      </p>

      <div className={styles.grid}>
        <div className={styles.grid_item}>
          <h4>TechLadies</h4>
          <h5>Platform to manage Bootcamp applications</h5>
          <p>Built with Ruby on Rails, PostgreSQL, Bootstrap</p>

          <p>
            View recording of app demo{" "}
            <a
              href="https://engineers.sg/video/team-techladies-techladies-bootcamp-3--2228"
              target="_blank"
            >
              here
            </a>
          </p>
          <p>
            Site{" "}
            <a href="http://www.bootcamp.techladies.co" target="_blank">
              here
            </a>
          </p>
          <button>click</button>
        </div>

        <div className={styles.grid_item}>
          <h4>Eventix</h4>
          <h5>
            Ticketing platform for musical shows, performances and events.
          </h5>
          <p>Built with ReactJS, Express, Node.js, MongoDB</p>
        </div>

        <div className={styles.grid_item}>
          <h4>Wellderly</h4>
          <h5>Digital marketplace for elderly care and related services.</h5>
          <p>
            Worked in a team with agile practices. Built with ReactJS, Express,
            Node.js, MongoDB
          </p>
          <p>
            Site{" "}
            <a href="https://test-wellderly.herokuapp.com/" target="_blank">
              here
            </a>
          </p>
        </div>

        <div className={styles.grid_item}>
          <h4>Prototype</h4>
          <h5>Static webpage</h5>
          <p>Built with Ruby on Rails, CSS Grid</p>
          <p>
            Site{" "}
            <a href="http://www.prototypes.sg/" target="_blank">
              here
            </a>
          </p>
        </div>

        <div className={styles.grid_item}>
          <h4>Lambda</h4>
          <h5>Static webpage</h5>
          <p>Built with HTML/CSS, Bootstrap</p>
          <p>
            Site{" "}
            <a href="http://lambda.sg/" target="_blank">
              here
            </a>
          </p>
        </div>

        <div className={styles.grid_item}>
          <h4>Mentone</h4>
          <h5>Static webpage</h5>
          <p>Built with HTML/CSS, Bootstrap</p>
          <p>
            <p>
              Site{" "}
              <a href="http://mentone.com.sg/" target="_blank">
                here
              </a>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
