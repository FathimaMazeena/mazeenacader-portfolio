import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div>
         <nav class="navigation">
    <ul class="navigation-items">
      <li><a href="#about"><h3 class="navigation-item">About Me</h3></a></li>
      <li><a href="#projects"><h3 class="navigation-item">Projects</h3></a></li>
      <li><a href="#certifications"><h3 class="navigation-item">Certifications</h3></a></li>
      <li><a href="#skills"><h3 class="navigation-item">Skills</h3></a></li>
      <li><a href="#contact"><h3 class="navigation-item">Contact</h3></a></li>

    </ul>
</nav>
    </div>
  )
}

export default Navbar