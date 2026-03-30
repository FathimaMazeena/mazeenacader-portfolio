import React from "react";
import "./Skills.css";
import TechIcons from "../../data/TechIcons";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      
      <div className="skills-left">
        <h1>Confident in what I’ve mastered —</h1>

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

    

      {/* <h1 className="section-title">SKILLS</h1> */}

      {/* <div className="skill-container">


            
            

                <div className="logo-grid">
                  <div className="logo-container"><img className="logos" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" /></div>
                <div className="logo-container"><img className="logos" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"/></div>
                <div className="logo-container"><img className="logos" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" /></div>
                <div className="logo-container"><img className="logos" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" /></div>
                <div className="logo-container"><img className="logos" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" /></div>
                <div className="logo-container"><img className="logos" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" /></div>
                <div className="logo-container"><img className="logos" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" /></div>
                <div className="logo-container"><img className="logos" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" /></div>
                <div className="logo-container"><img className="logos" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" /></div>
                    <div className="logo-container"><img className="logos"src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" /></div>
                <div className="logo-container"><img className="logos"src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" /></div>
                <div className="logo-container"><img className="logos"src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" /></div>
                <div className="logo-container"><img className="logos" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" /></div>
                <div className="logo-grid">
                <div className="logo-container"><img className="logos" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" /></div>
                <div className="logo-container"><img className="logos" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" /></div>
                <div className="logo-container"><img className="logos" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" /></div>
                <div className="logo-container"><img className="logos" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" /></div>
                <div className="logo-container"><img className="logos" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg"/></div>
                <div className="logo-container"><img className="logos" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg" /></div>
                <div className="logo-container"><img className="logos" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg" /></div>
                <div className="logo-container"><img className="logos" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg" /></div>
           <div className="logo-container"><img className="logos" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" /></div>
                <div className="logo-container"><img className="logos" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" /></div>
                <div className="logo-container"><img className="logos" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" /></div>
                <div className="logo-container"><img className="logos" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" /></div>
                <div className="logo-container"><img className="logos" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"/></div>
                <div className="logo-container"><img className="logos" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg"/></div>
                <div className="logo-container"><img className="logos" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg" /></div>
                 
    
  
                </div>
                

        

         

             
            </div>  

            
                
             

            
           
              


          

       
                
                
  
    
               
    </div> */}
    </section>
  );
};

export default Skills;
