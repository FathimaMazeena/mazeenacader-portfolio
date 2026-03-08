import './App.css'

// import Skills from '../src/sections/skills/Skills'

// import Hero from '../src/sections/hero/Hero'
// import Certification from '../src/sections/certifications/Certifications'
// import Interests from '../src/sections/interests/Interests'
// import Footer from '../src/sections/footer/Footer'
// import Contact from '../src/sections/contact/Contact'
import Navbar from '../src/sections/navbar/Navbar'
// import SplashScreen from '../src/sections/splashScreen/SplashScreen'
import Hero from '../src/sections/hero/Hero'
import Projects from '../src/sections/projects/Projects'
import About from './sections/about/About'
import Snapshot from './sections/snapshot/Snapshot'

function App() {


  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Snapshot/>
    {/* <Projects/> */}
     {/* <Skills/> */}
     {/* <SplashScreen /> */}
     
      {/* <Hero/> */}
      {/* <Certification/>
      <Skills/>
      <Interests/>
      <Contact/>
      <Footer/> */}
    </>
  )
}

export default App
