import React from "react";
import '../App.css';

function About(props){
    return(
        <div className="About" ref={props.innerRef}>
            <h1>About</h1>
            <div style={{display:"flex"}}>
                <div>
                <p>
                    &nbsp; &nbsp; &nbsp; &nbsp;My name is Andy Kotz, and I was born and raised in Lyme, New Hampshire, but have 
                    also lived in India and Switzerland. I am currently a rising junior at Dartmouth pursuing a Bachelor of arts 
                    in Computer Science and a Bachelor of Engineering. I'm interested in educational software, physical computing, 
                    and computer-aided design.
                </p>
                <p>
                    &nbsp; &nbsp; &nbsp; &nbsp;I have experience in web development, mobile development, and virtual reality. I am
                    pursuing a career in Software Engineering and currently looking for full-time internships.
                </p>
                <p>
                    &nbsp; &nbsp; &nbsp; &nbsp;Check out my portfolio and resume below!
                </p>
                </div>
                <img 
                src={require('../assets/Andy.png')}
                alt="Andy"
                style={{
                    width: "100%",
                    height: "500px",
                    borderRadius: "10px",
                }} />
            </div>
        </div>
    )
}

export default About;