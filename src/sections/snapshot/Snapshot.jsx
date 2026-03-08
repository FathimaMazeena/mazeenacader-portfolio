import "./../../styles/layout.css";
import "../../styles/components.css";
import "./Snapshot.css";
// import Logos from "../../components/logos/Logos";

export default function Snapshot() {
  return (
    <div>
      <section className="section snapshot-section">
        <div className="container snapshot-wrapper">
          <h1>
            <span className="title-light">PROFESSIONAL</span>
            <br></br> <span className="title-dark">SNAPSHOT</span>
          </h1>
          <div className="business-card">
            <div>
              <h2 className="card-title">Mazeena Cader</h2>
              <p className="card-text">Aspiring Software Engineer</p>
              <p className="card-text">
                Creating seamless human centered web experiences
              </p>
            </div>

            <div>
              <h3 className="card-text">Availability</h3>
              <p className="card-text">Remote . Open to internships</p>
              <p className="card-text">Based in Sri Lanka . Working globally</p>
              <p className="card-text">Open to freelance projects</p>
            </div>

            <div  className="social-contact-container">
              <div>
                <h3 className="card-text">Links</h3>
                {/* <Logos type="social" /> */}


                
              </div>

              <div>
                <h3 className="card-text">Contact</h3>
                {/* <Logos type="contact" /> */}
                
                
              </div>
            </div>
 
            <div className="card-case">
    
            </div>
          </div>

         
            
        </div>
        
      </section>
      
    </div>
  );
}
