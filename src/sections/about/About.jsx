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
          <h2>
            <span className="intro-text">HELLO I'M </span>
            <span className="name-text">MAZEENA</span>
          </h2>
          <h1>THE PERSON BEHIND THE WORK.</h1>
          <h3>
            a creative developer who blends logic, design, <br></br>and motion
            to build thoughtful digital experiences.
          </h3>
        </div>
        <div className="col right-col">
          <p>
            I’m a MERN Stack Developer passionate about building innovative,
            impactful web experiences. I enjoy exploring new ideas, pushing
            boundaries, and crafting seamless, engaging interfaces. Each project
            reflects my curiosity, growth, and love for collaboration—because
            the best solutions are built together. Each project reflects my
            curiosity, growth, and love for collaboration—because the best
            solutions are built together.
          </p>
          <div className="download-resume">
            <h2>
              DOWNLOAD<br></br> MY RESUME
            </h2>

          </div>

        </div>

        <div className="col left-col">
          <div className="education-wrapper">
            <h1>
              <span className="title-light">EDUCATION</span>
            </h1>
            <div className="education-rows">
              <div className="education-row">
                <p>BSc. Hons in Software Engineering</p>
                <p className="light">Cardiff Metropolitan University</p>
                <div className="details">
                  <p className="light italic">2024-2026</p>
                  <p className="light italic">First Class Honors</p>
                </div>
              </div>
              <div className="education-row">
                <p>Higher Diploma in Computing and Software Engineering</p>
                <p className="light">Cardiff Metropolitan University</p>
                <div className="details">
                  <p className="light italic">2022-2024</p>
                  <p className="light italic">Distinction</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col metrics-wrapper">
          <div className="project-metrics">
            <div className="metrics-col">
              <h1 className="text-highlight numbers">10+</h1>
              <p>Total Projects</p>
            </div>

            <div className="metrics-col">
              <h1 className="text-highlight numbers">3+</h1>
              <p>Full-Stack Applications</p>
            </div>

            <div className="metrics-col">
              <h1 className="text-highlight numbers">2</h1>
              <p>AI Projects</p>
            </div>

            <div className="metrics-col">
              <h1 className="text-highlight numbers">2</h1>
              <p>Landing Pages</p>
            </div>

            
          </div>

          <div className="explore-cta">
              <p className="cta-subtext">
                See how these numbers translate into real work
              </p>
              <a href="#projects" className="text-highlight explore-btn">
                Explore My Work →
              </a>
            </div>
          
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
