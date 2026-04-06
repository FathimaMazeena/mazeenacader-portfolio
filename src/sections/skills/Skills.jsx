import React from "react";
import "./Skills.css";
import TechIcons from "../../data/TechIcons";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      
      <div className="skills-left">
        <h1>Confident in what I’ve <span className="highlight">mastered</span> —</h1>

       <div className="skills-container skills-container-left">
  {Object.entries(TechIcons.mastered).map(([tech, icon], index) => (
    <div className="logo-container" key={index}>
      

        {icon.startsWith("http") ? (
      <img src={icon} alt={tech} className="tech-icon-img" />
    ) : (
      <i className={`${icon} colored tech-icon-left`}
      title={tech} />
    )}
    </div>
  ))}
</div>

      </div>

      <div className="skills-right">
        <h1>curious about what comes next.</h1>
        <div className="skills-container skills-container-right">
  {Object.entries(TechIcons.learning).map(([tech, icon], index) => (
    <div className="logo-container" key={index}>
       {icon.startsWith("http") ? (
      <img src={icon} alt={tech} className="tech-icon-img" />
    ) : (
      <i className={`${icon} tech-icon-right`} 
      title={tech}/>
    )}
    </div>
  ))}
</div>

      </div>

  
    </section>
  );
};

export default Skills;
