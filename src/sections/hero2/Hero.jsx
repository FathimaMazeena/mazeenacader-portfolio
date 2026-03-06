import React from "react";
import "./Hero.css";
import resume from "../../assets/resume.png";

function Hero() {
  return (
    <section className="hero-section">

        
      <div className="hero-wrapper wrapper">
        <div className="hero-left">
            <div className="headline">
                <h3>Hello there! I am <span className="name">Mazeena Cader</span></h3>
            </div>
            <div className="sub-headline">
                <h3><span className="name">Mazeena Cader.</span>
                A Software Engineer Building Full-Stack & AI Solutions.</h3>
                <h4>JavaScript | Python | React</h4>

            </div>
         <div className="summary">
          <p>
            {" "}
            I'm a MERN Stack Developer with a passion for crafting code that’s
            both innovative and impactful. I love exploring new ideas, pushing
            boundaries, and creating web experiences that feel seamless and
            engaging. My journey as a developer has been an exciting blend of
            challenges and triumphs, each project helping me grow and refine my
            skills. Here, you’ll find projects built with curiosity and a
            commitment to collaboration—because I believe that the best
            solutions come from working together. Dive in and explore, and let’s
            build something amazing!
          </p>
        </div>
        </div>
        
        <a
                href="https://drive.google.com/file/d/1cDYa6elcXbyTlOUkjOpX32erlwvs8Hn3/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
          <div className="resume">
            <img src={resume} alt="Resume Preview" />
          </div>
          </a>

       
        <div className="social"></div>
      </div>
    </section>
  );
}

export default Hero;