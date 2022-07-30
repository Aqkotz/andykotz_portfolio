import React from "react";
import '../App.css';

function TopBar(props) {
  return (
    <span style={{justifyContent: "right", display:"flex", padding:"10px", float:"right"}}>
        <div className="TopBarButton" onClick={() => props.handleClick(props.aboutRef)}>
            About
        </div>
        <div className="TopBarButton" onClick={() => props.handleClick(props.projectsRef)}>
            Projects
        </div>
        <div className="TopBarButton" onClick={() => props.handleClick(props.skillsRef)}>
            Skills
        </div>
        <div className="TopBarButton" onClick={() => props.handleClick(props.resumeRef)}>
            Resume
        </div>
        <div className="TopBarButton" onClick={() => props.handleClick(props.contactRef)}>
            Contact
        </div>
    </span>
  );
}

export default TopBar;