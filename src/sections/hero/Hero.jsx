import React from "react";
import "./../../styles/layout.css";
import "./Hero.css";
import { useEffect } from "react";
import gsap from "gsap";

export default function Hero() {

//    useEffect(() => {

//   gsap.from(".giant-m", {
//     scale: 0.5,
//     opacity: 0,
//     duration: 1.2,
//     ease: "power3.out"
//   });

// }, []);


    return (
     <section className="section hero-section">
        <div className="container hero-wrapper">

            <div><h1 className="giant-m">M</h1></div>

            <div className="word-art">
                <div><h2 className="name forename">AZEENA</h2></div>

                <div className="column-three">
                    <div>
                        <h2 className="hook">EET THE PERSON</h2>
                        <h2 className="hook">BEHIND THE WORK</h2>
                        <h2 className="hook">your exploring</h2>
                        <h3 className="intro">Hello there! I'm</h3>
                    </div>
                    
                    <h2 className="name last-name">CADER</h2>
                </div>
            </div>

            
            
            

        </div>
        </section>  
    );
}
