import React from "react";
import '../App.css';

function About(props){
    return(
        <div className="About" ref={props.innerRef}>
            <h1>About</h1>
            <p>
                &nbsp; &nbsp; &nbsp; &nbsp;I'm a Computer Science and Engineering student at Dartmouth College interested in Software Engineering. I have experience in web development, mobile development, and virtual reality.
            </p>
        </div>
    )
}

export default About;