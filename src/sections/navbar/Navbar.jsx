import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div>
         <nav class="navigation">
    <ul class="navigation-items">
      <li><a href="#about"><p class="navigation-item">About Me</p></a></li>
      <li><a href="#projects"><p class="navigation-item">Projects</p></a></li>
      <li><a href="#certifications"><p class="navigation-item">Certifications</p></a></li>
      <li><a href="#skills"><p class="navigation-item">Skills</p></a></li>
      <li><a href="#contact"><p class="navigation-item">Contact</p></a></li>

    </ul>
</nav>
    </div>
  )
}

export default Navbar