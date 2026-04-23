import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div>
         <nav className="navigation">
    <ul className="navigation-items">
      <li><a href="#about"><p className="navigation-item">About</p></a></li>
      <li><a href="#projects"><p className="navigation-item">Projects</p></a></li>
      <li><a href="#certifications"><p className="navigation-item">Certifications</p></a></li>
      <li><a href="#skills"><p className="navigation-item">Skills</p></a></li>
      <li><a href="#contact"><p className="navigation-item">Contact</p></a></li>

    </ul>
</nav>
    </div>
  )
}

export default Navbar