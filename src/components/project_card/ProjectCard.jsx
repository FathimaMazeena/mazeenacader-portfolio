import "./ProjectCard.css";


const ProjectCard = ({ project, size, onClick}) => {

  return (
    <div
      className={`project-card ${size}`}
       onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "default" }} 
    
    >
      
                <p className="primary-tech">{project.primaryTechnology}</p>
                <h1 className="project-title">
                  <span className="text-light">{project.name}</span>
                  <br></br>
                  <span className="text-dark">{project.title}</span>
                </h1>

                <div className="project-links">
                  <a
                  href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{textDecoration: "none"}}>
                <div>
                    <i className="devicon-github-original colored"></i>
                    </div>
                  </a>
                   <a
                  href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{textDecoration: "none"}}>
                <div>
                    <i
                      className="fa-solid fa-link"
                      style={{ color: "rgba(0, 0, 0, 1)" }}
                    ></i>
                  </div>
              </a>
                  
                  <div>
                    <i
                      className="fa-solid fa-image"
                      style={{ color: "rgba(0, 0, 0, 1)" }}
                    ></i>
                  </div>
                </div>
              </div>

  );
};

export default ProjectCard;
