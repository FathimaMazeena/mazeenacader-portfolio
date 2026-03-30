import React from "react";
import styles from "./ProjectCard1.module.css";
import TechIcons from "../../data/TechIcons";

function ProjectCard({ project }) {
  return (
 
      <div className={styles.projectCard}>
        <div className={styles.technologies}>
          <p className={styles.primaryTech}>{project.primaryTechnology}</p>

          <div className={styles.techIcons}>
            {project.technologies.map((tech, index) => (
              <img
                key={index}
                src={TechIcons[tech]}
                alt={tech}
                className={styles.techIcon}
              />
            ))}
          </div>
        </div>
        <div className={styles.projectContent}>
          <div className={styles.projectCardLeft}>
            <h1>
                <span className={styles.titleLight}>{project.name}</span>
                <br></br>
                <span className={styles.titleDark}>{project.title}</span>
              </h1>
              <p>{project.status}</p>
              <p>{project.date}</p>
              <p>{project.type}</p>
          </div>

          <div className={styles.projectCardRight}>
            <p>{project.description}</p>
              <p>Key Features:</p>
              <ul>
                {project.features.map((feature, index) => (
                  <li key={index}>
                    <p>{feature}</p>
                  </li>
                ))}
              </ul>
          </div>
        </div>
      </div>
  
  );
}

export default ProjectCard;
