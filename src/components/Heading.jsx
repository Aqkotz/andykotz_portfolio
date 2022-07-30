import React from "react";
import '../App.css';

function Heading(props) {
  return (
    <div className="Header" style={{padding: "60px", paddingTop:"150px", paddingBottom:"90px"}}>
        <h1>Hi, I'm Andy.</h1>
        <h1>I'm a Software Engineer and Computer</h1>
        <h1>Science student at Dartmouth College.</h1>
        <span style={{justifyContent: "left", display:"flex", padding:"10px"}}>
        <a className="TopBarButton" href="https://github.com/Aqkotz">
            Github
        </a>
        <a className="TopBarButton" href="https://www.linkedin.com/in/andy-kotz-6a58391b9/">
            LinkedIn
        </a>
        <a className="TopBarButton" href="https://github.com/Aqkotz/andykotz_portfolio">
            Website Repo
        </a>
    </span>
    </div>
  );
}

export default Heading;