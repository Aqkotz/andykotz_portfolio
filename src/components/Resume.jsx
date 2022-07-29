import React, { useState } from "react";
import '../App.css';
import resume from '../assets/resume.pdf';

function Resume(props){

    const [hovered, setHovered] = useState(false);

    return(
        <div className="Resume" ref={props.innerRef}>
            <h1>Resume</h1>
            <div style={{display:"flex"}}>
                <p>You can look at my resume here:</p>
                <a 
                    href={resume} 
                    download="Andy_Kotz_Resume.pdf" 
                    className="p" 
                    onMouseEnter = {() => {setHovered(true);}} 
                    onMouseLeave = {() => {setHovered(false);}}
                    style={{
                        color:"grey",
                        backgroundColor:"white",
                        borderRadius:"5px",
                        padding:"15px",
                        alignContent:"center",
                        alignItems:"center",
                        justifyContent:"center",
                        marginLeft:"50px",
                        transition: "all 0.25s ease-in-out",
                        boxShadow: hovered ? "2px 2px 10px #404040" : "0px 0px 5px #606060",
                        transform: hovered ? "scale(1.01)" : "scale(1)",
                        textDecoration: "none",
                }}> Download Resume </a>
            </div>
        </div>
    )
}

export default Resume;