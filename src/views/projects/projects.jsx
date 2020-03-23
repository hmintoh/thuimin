import React from "react";
import styles from "./projects.module.css";

const Projects = () => {
  return (
    <div id="projects" className="dark">
      <div className="wrapper">
        <h2>Selected Projects</h2>

        <div className={styles.grid}>
           <div className={styles.grid_item}>
            <h3>Eventix</h3>
            <p className={styles.date}>(WIP)</p>
            <p className={styles.summary}>
              Ticketing platform for musical shows, performances and events
            </p>
            <p>Built with React, Express, Node.js, MongoDB</p>
          </div>

          <div className={styles.grid_item}>
            <h3>Lambda</h3>
            <p className={styles.date}>(2020)</p>
            <p className={styles.summary}>Corporate website</p>
            <p>Built with Vue, Webpack, Vue transitions</p>
            <a
              href="https://lambda.sg"
              target="_blank"
              rel="noopener noreferrer">
              Site
            </a>
          </div>

          <div className={styles.grid_item}>
            <h3>Wellderly</h3>
            <p className={styles.date}>(2019)</p>
            <p className={styles.summary}>
              Digital marketplace for elderly care and related services
            </p>
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
              rel="noopener noreferrer">
              Site
            </a>
          </div>

          <div className={styles.grid_item}>
            <h3>Prototype</h3>
            <p className={styles.date}>(2019)</p>
            <p className={styles.summary}>Corporate website</p>
            <p>Built with React</p>
            <a
              href="https://www.prototypes.sg"
              target="_blank"
              rel="noopener noreferrer">
              Site
            </a>
          </div>

          <div className={styles.grid_item}>
            <h3>Audioground SG</h3>
            <p className={styles.date}>(2019)</p>
            <p className={styles.summary}>Corporate website</p>
            <p>Built with React</p>
            <p>
              <a
                href="https://audioground.netlify.com/"
                target="_blank"
                rel="noopener noreferrer">
                Site
              </a>
            </p>
          </div>

          <div className={styles.grid_item}>
            <h3>Chicago Global</h3>
            <p className={styles.date}>(2019)</p>
            <p className={styles.summary}>Corporate website</p>
            <p>Demo built with React</p>
            <p>
              <a
                href="https://cgwealth.netlify.com/"
                target="_blank"
                rel="noopener noreferrer">
                Site
              </a>
            </p>
          </div>

          <div className={styles.grid_item}>
            <h3>TechLadies</h3>
            <p className={styles.date}>(2017)</p>
            <p className={styles.summary}>
              Platform to manage Bootcamp applications
            </p>
            <p>Group Project. Built with Ruby on Rails, PostgreSQL</p>
            <p>
              View app demo{" "}
              <a
                href="https://engineers.sg/video/team-techladies-techladies-bootcamp-3--2228"
                target="_blank"
                rel="noopener noreferrer">
                here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
