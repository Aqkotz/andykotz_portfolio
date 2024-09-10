import React from "react";
import '../App.css';

function About(props){
    return(
        <div className="About" ref={props.innerRef}>
            <h1>About</h1>
            <div style={{display:"flex"}}>
                <div>
                <p>
                    My name is Andy Kotz, and I was born and raised in Lyme, New Hampshire, but have 
                    also lived in India and Switzerland. I'm a software Engineer at Apple in Wireless
                    Technologies and Ecosystems, working on iPhone satellite connectivity.
                </p>
                <p>
                    I graduated from Dartmouth in 2024 with a BA in Compter Science 
                    and a BE in Physical Computing. I'm interested in educational software, physical computing, 
                    and computer-aided design.
                </p>
                <p>
                    Check out my portfolio and resume below!
                </p>
                </div>
                <img 
                src={require('../assets/Andy.png')}
                alt="Andy"
                style={{
                    width: "auto",
                    height: "500px",
                    borderRadius: "10px",
                    marginLeft: "20px",
                }} />
            </div>
        </div>
    )
}

export default About;