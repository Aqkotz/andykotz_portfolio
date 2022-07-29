import React from "react";
import '../App.css';

function Contact(props){
    return(
        <div className="Contact" ref={props.innerRef}>
            <h1>Contact</h1>
            <p>
                Dartmouth Email: <a href="mailto:andy.24@dartmouth.edu" style={{color:"#0f8dd6"}}>andy.24@dartmouth.edu</a>
            </p>
            <p>
                Personal Email: <a href="mailto:andy.lyme@mac.com" style={{color:"#0f8dd6"}}>andy.lyme@mac.com</a>
            </p>
            <p>
                Phone: (603) 277-0714
            </p>
        </div>
    )
}

export default Contact;