import React from "react";
import "./Contact.css";
// import '../skills/Skills.css'
import note from "../../assets/note.png";
import mockup from "../../assets/social-mockup2.png";
import Logos from "../../components/logos/Logos";
import notes from "../../data/NotesData";


function Contact() {
  return (
    <div>
      <section id="contact" className="section contact-section">
        <div className="container email-section">
          <div className="contact-left">
             <h2>
            <span className="connect">connect</span>
           
          </h2>


          <div class="contact-wheel">

  <div className="circle-link"></div>
  <a href="mailto:fathimamazeena.mycloudcubicle@gmail.com" className="circle-link"><i className="fas fa-envelope"></i></a>
  <div className="circle-link"></div>
  <a href="https://www.linkedin.com/in/fathimamazeenacader/" className="circle-link"><i className="fa-brands fa-linkedin-in"></i></a>
  <a href="https://wa.me/+94758843241" className="circle-link"><i className="fab fa-whatsapp"></i></a>
   <a href="https://medium.com/@mazeenacader" className="circle-link"><i className="fab fa-medium"></i></a>
   <div className="circle-link"></div>
  <a href="https://github.com/FathimaMazeena" className="circle-link"><i className="fab fa-github"></i></a>
 <div className="circle-link"></div>

</div>

{/* <div className="contact-links">
   <div className="button">Github</div>
          <div className="button">Email</div>
          <div className="button">Phone</div>
          <div className="button">Linkedin</div>
          <Logos type="social"/>
          <Logos type="contact"/>
</div>
          */}

          </div>
         


          <div className="contact-form">
             <div className="row"><h2>Send Me a Message</h2></div>
            <div className="row">
  <label>To:</label>
  <p className="recipient-mail">
    fathimamazeena.mycloudcubicle@gmail.com
  </p>
</div>
 <div className="row">
  <label>From:</label>
            <p className="input-box senders-mail">

              <input
             
                type="text"
                id="email"
                email="email"
                placeholder="typeyouremailhere@gmail.com"
              />
            </p>
            </div>

             <div className="row">
  <label>Subject:</label>
  <p className="input-box subject">
    <input
             
                type="text"
                id="subject"
                placeholder="Subject"
              />
  </p>
</div>
            <div>
              <label>Message:</label>
              <div className="message-box"><textarea rows="10" placeholder="Write something before you go!"></textarea></div>
            </div>

            <button className="button">Send Message</button>
          </div>
        </div>

        <div className="container contact-wrapper">
          <div className="contact-left">
            <h1>
              <span className="title-light">WRITE SOMETHING</span>
              <br></br>
              <span className="title-dark">BEFORE YOU GO!</span>
            </h1>

            <div className="">
              <div className="note-container">
                <img className="sticky-note" src={note} />

                <textarea
                  className="note-input"
                  id="message"
                  placeholder="Write something before you go!"
                ></textarea>
                <div className="send-button">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M10.3009 13.6949L20.102 3.89742M10.5795 14.1355L12.8019 18.5804C13.339 19.6545 13.6075 20.1916 13.9458 20.3356C14.2394 20.4606 14.575 20.4379 14.8492 20.2747C15.1651 20.0866 15.3591 19.5183 15.7472 18.3818L19.9463 6.08434C20.2845 5.09409 20.4535 4.59896 20.3378 4.27142C20.2371 3.98648 20.013 3.76234 19.7281 3.66167C19.4005 3.54595 18.9054 3.71502 17.9151 4.05315L5.61763 8.2523C4.48114 8.64037 3.91289 8.83441 3.72478 9.15032C3.56153 9.42447 3.53891 9.76007 3.66389 10.0536C3.80791 10.3919 4.34498 10.6605 5.41912 11.1975L9.86397 13.42C10.041 13.5085 10.1295 13.5527 10.2061 13.6118C10.2742 13.6643 10.3352 13.7253 10.3876 13.7933C10.4468 13.87 10.491 13.9585 10.5795 14.1355Z"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="sticky-wall">
            {notes.map((note) => (
              <div key={note.id} className="note">
                <div className="note-inner">
                  <div className="note-front">
                    <p>{note.name}</p>
                  </div>

                  <div className="note-back">
                    <p>{note.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="social">
            <Logos type="social" />
            <Logos type="contact" />
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default Contact;
