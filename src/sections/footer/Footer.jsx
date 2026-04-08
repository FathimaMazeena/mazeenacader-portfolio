import React from 'react' 
import './Footer.css' 
import Logos from '../../components/logos/Logos' 

function Footer() { return ( 

<div>

<section className="footer">

  {/* Wrap-up line */}
  <div className="wrap-up">
    <h1>
      <span className="muted">More ideas.</span>{" "}
      <span className="dark">More building.</span>{" "}
      <span className="text-highlight">More impact.</span>
    </h1>

    <h2 className="wrap-subline">
    <span className="title-light">
      Watch this space as the story unfolds.
    </span>
  </h2>
  </div>

  <div className="footer-wrapper">

    {/* LEFT: Brand */}
    <div className="footer-brand">
      <h2>Mazeena</h2>
      <p>
        Crafting thoughtful digital experiences with code, design, and motion.
      </p>
    </div>

    {/* MIDDLE 1: Navigation */}
    <div className="footer-col">
      <p className="footer-title">Explore</p>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>

    {/* MIDDLE 2: Projects */}
    <div className="footer-col">
      <p className="footer-title">Featured Work</p>
      <ul>
        <li><a href="#">Restaurant Web App</a></li>
        <li><a href="#">Portfolio Website</a></li>
        <li><a href="#">E-commerce UI</a></li>
      </ul>
    </div>

    {/* RIGHT: Socials */}
    <div className="footer-col">
      <p className="footer-title">Connect</p>
      <ul>
        <li><a href="#">GitHub</a></li>
        <li><a href="#">LinkedIn</a></li>
        <li><a href="#">Medium</a></li>
        <li><a href="mailto:your@email.com">Email</a></li>
      </ul>
    </div>

     <div className="footer-col">
    <p className="footer-title">Contact</p>
    <ul>
      <li><a href="fathimamazeena.mycloudcubicle@gmail.com">fathimamazeena.mycloudcubicle@gmail.com</a></li>
      <li><a href="tel:+94758843241">+94 758843241</a></li>
    </ul>
  </div>

  </div>

  {/* Bottom strip */}
  <div className="footer-bottom">
    <p>© 2026 Mazeena. Built with passion.</p>
  </div>

</section>

</div>

  ) }

  export default Footer