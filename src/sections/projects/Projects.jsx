import "./Projects.css";
import ProjectCard from "../../components/project_card/ProjectCard";
import projects from "../../data/ProjectData";
import TechIcons from "../../data/TechIcons";
import React, { useState } from "react";

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className="projects-section">
      {projects.map((project) => (
        <div className="container featured-section">
          {/* <h1>
            <span className="title-light">FEATURED PROJECTS</span>
          </h1> */}
          <div className="featured-project">
            <div className="featured-left">
              <h1 className="txt project-name">{project.name}</h1>
              <h1 className="txt">
                {" "}
                <span className="title-light">{project.title}</span>
              </h1>
              <p className="txt">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="tour-btn"
              >
                Launch Site →
              </a>
            </div>

            <div className="featured-right">
              <img
                src={project.cover}
                alt={project.name}
                className="project-cover"
              />
            </div>
          </div>
        </div>
      ))}

      <div className="container project-container">
        <h1>
          <span className="title-light">EXPLORE MORE</span>
          <br></br>
          <span className="title-dark"> PROJECTS</span>
        </h1>

        {/* <div className="more-projects">
          {projects.map((project, index) => (
        
<ProjectCard
key={project.id}
        project={project}
        size="small"
        onClick={() => setActiveProject(project)}
        />
        

        
          ))}
        </div> */}
        <div className="more-projects">
          {projects
            .filter(
              (project) => !activeProject || project.id === activeProject.id,
            )
            .map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                size="small"
                onClick={() => setActiveProject(project)}
              />
            ))}
        </div>

        {/* {projects.map((project, index) => (
          <div className={`project-wrapper ${activeProject ? "active" : ""}`} key={index}>
            <div className="project-left">
              <div className="other-info">
                <p className="ultra-thin-text">{project.date}</p>
                <p className="ultra-thin-text">{project.type}</p>
              </div>
              <div className="other-info">
                <p className="ultra-thin-text status">
                  <span
                    className={`status-dot ${
                      project.status === "Completed"
                        ? "status-completed"
                        : "status-ongoing"
                    }`}
                  ></span>
                  {project.status}
                </p>

                <div className="tech-icons">
                  {project.technologies.map((tech, index) => (
                    // <img
                    //   key={index}
                    //   src={TechIcons[tech]}
                    //   alt={tech}
                    //   className="tech-icon"
                    // />

                    <i
                      key={index}
                      className={`${TechIcons[tech]} colored tech-icon`}
                      title={tech} // optional tooltip
                      style={{ color: "#444141ff" }}
                    ></i>
                  ))}
                </div>
              </div>

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
            <div className="project-right">
              <ProjectCard
               project={project}
              size="large"/>
            </div>
          </div>
        ))} */}

        {activeProject && (
          <div className="project-wrapper active">
            <div className="project-left">
              <div className="other-info">
                <p className="ultra-thin-text">{activeProject.date}</p>
                <p className="ultra-thin-text">{activeProject.type}</p>
              </div>

              <div className="other-info">
                <p className="ultra-thin-text status">
                  <span
                    className={`status-dot ${
                      activeProject.status === "Completed"
                        ? "status-completed"
                        : "status-ongoing"
                    }`}
                  ></span>
                  {activeProject.status}
                </p>

                <div className="tech-icons">
                  {activeProject.technologies.map((tech, index) => (
                    <i
                      key={index}
                      className={`${TechIcons[tech]} colored tech-icon`}
                      title={tech}
                      style={{ color: "#444141ff" }}
                    ></i>
                  ))}
                </div>
              </div>

              <p>{activeProject.description}</p>

              <p>Key Features:</p>
              <ul>
                {activeProject.features.map((feature, index) => (
                  <li key={index}>
                    <p>{feature}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="project-right">
              <ProjectCard project={activeProject} size="large" />
            </div>
            {/* <button onClick={() => setActiveProject(null)}>
  ← Back
</button> */}
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
