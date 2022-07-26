import React from "react";
import '../App.css';

function Resume(props){
    return(
        <div className="Resume" ref={props.innerRef}>
            <h1>Resume</h1>
            <p>
                &nbsp; &nbsp; &nbsp; &nbsp;I'm a Computer Science and Engineering student at Dartmouth College interested in Software Engineering. I have experience in web development, mobile development, and virtual reality.
            </p>
        </div>
    )
}

export default Resume;