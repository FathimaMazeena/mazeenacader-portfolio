import React from "react";
import "./../../styles/layout.css";
import "./About.css";
import resume from "../../assets/resume.png";


export default function About() {

    return (
        <section className="section about-section">
        <div className="container about-wrapper">
            <div className="col left-col">
                {/* <h2>HELLO I’M MAZEENA</h2> */}
                <h2><span className="intro-text">HELLO I'M </span><span className="name-text">MAZEENA</span></h2>
            <h1>THE PERSON BEHIND THE WORK.</h1>
            <h3>a creative developer who blends logic, design, <br></br>and motion to build thoughtful digital experiences.</h3>
            
            </div>
           <div className="col right-col">
        <p>I’m a MERN Stack Developer passionate about building innovative, impactful web experiences. I enjoy exploring new ideas, pushing boundaries, and crafting seamless, engaging interfaces. Each project reflects my curiosity, growth, and love for collaboration—because the best solutions are built together. Each project reflects my curiosity, growth, and love for collaboration—because the best solutions are built together.</p>
        <h2>DOWNLOAD<br></br> MY RESUME</h2>
        

          
        </div>

      
        </div>

        <div className="resume-wrapper">
             <a
                        href="https://drive.google.com/file/d/1cDYa6elcXbyTlOUkjOpX32erlwvs8Hn3/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                  <div className="resume">
                    <img src={resume} alt="Resume Preview" />
                  </div>
                  </a>
        </div>
        </section>
    );
}