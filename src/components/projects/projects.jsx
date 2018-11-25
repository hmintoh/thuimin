import React from "react";
import styles from "./projects.module.css";

const Projects = () => {
  //   <div class="grid-item">
  //   <h4>TechLadies</h4>
  //   <p>Built with Ruby on Rails, Bootstrap, PostgreSQL</p>
  //   <p>Site <a href="http://www.bootcamp.techladies.co" target="_blank">here</a>.</p>
  //   <p>View recording of app demo <a href="https://engineers.sg/video/team-techladies-techladies-bootcamp-3--2228" target="_blank">here</a>.</p>
  // </div>

  // <div class="grid-item">
  //   <h4>Mentone</h4>
  //   <p>Built with Bootstrap</p>
  //   <p>Site <a href="http://mentone.com.sg/" target="_blank">here</a>.</p>
  // </div>

  // <div class="grid-item">
  //   <h4>Lambda</h4>
  //   <p>Built with Bootstrap</p>
  //   <p>Site <a href="http://lambda.sg/" target="_blank">here</a>.</p>
  // </div>

  // <div class="grid-item">
  //   <h4>Prototype</h4>
  //   <p>Built with Ruby on Rails, CSS Grid</p>
  //   <p>Site <a href="http://www.prototypes.sg/" target="_blank">here.</a></p>
  // </div>

  return (
    <div id="projects" className="dark">
      <h2>Selected Projects</h2>

      <div className={styles.grid}>
        <div className={styles.grid_item}>
          <h4>TechLadies</h4>
          <p>Built with Ruby on Rails, PostgreSQL, Bootstrap.</p>
          <p>
            Site{" "}
            <a href="http://www.bootcamp.techladies.co" target="_blank">
              here
            </a>
            .
          </p>
          <p>
            View recording of app demo{" "}
            <a
              href="https://engineers.sg/video/team-techladies-techladies-bootcamp-3--2228"
              target="_blank"
            >
              here
            </a>
            .
          </p>

          <button>click</button>
        </div>
        <div className={styles.grid_item}>Mentone</div>
        <div className={styles.grid_item}>Lambda</div>
        <div className={styles.grid_item}>Prototype</div>
        <div className={styles.grid_item}>Eventix</div>
      </div>
    </div>
  );
};

export default Projects;
