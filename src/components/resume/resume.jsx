import React from "react";
import styles from "./resume.module.css";

const Resume = () => {
  return (
    <div id="resume" className="light">
      <h2>My Resume</h2>
      <p>
        <h4>2014 - 2018</h4>
        Moved back to Singapore, joined Jardine Lloyd Thompson (JLT) as a Retail
        Broker and left as a Senior Analyst in the Portfolio Management team
      </p>

      <p>
        <h4>2010 - 2013</h4>
        Went to the University of Michigan and left with a B.A in Economics and
        Philosophy
      </p>

      <p>
        <h4>2010</h4>
        Graduated with International Baccalaureate (IB) Diploma
      </p>

      <p>
        Knowledge sharing and community building are important to me. I
        volunteer for TechLadies, read my story{" "}
        <a href="http://blog.techladies.co/meet-min-techladies-bootcamp-organizer-coffee-lover-techlady/#.W_1lhRMzYWo">
          here
        </a>
        .
      </p>

      <p>
        My resume is available for download{" "}
        <a href="images/resume.pdf" download>
          here
        </a>
        .
      </p>
    </div>
  );
};

export default Resume;
