import React from 'react';
import {useState} from 'react';
import xIcon from '../assets/x_icon.png'

function ProjectCard(props){

    const [hovered, setHovered] = useState(false);
    const [exitHovered, setExitHovered] = useState(false);
    const images = require.context('../assets', true);

    return(
        <div 
            onMouseEnter = {() => {setHovered(true);}} 
            onMouseLeave = {() => {setHovered(false);}}
            onClick = {() => {if(!exitHovered) props.expandCard(props.id)}}
            className='Card' 
            style={{
                backgroundImage: props.project.image ? `url(${images(props.project.image)})` : "none", 
                backgroundSize: "cover", 
                backgroundColor: "f0f0f0", 
                width: props.minified ? "10%" : (props.expanded ? "80%" : "30%"), 
                height: props.minified ? 100 : (props.expanded ? 400 : 200),
                transition: "transform 0.25s ease-in-out",
                transitionProperty: props.expanded ? "box-shadow" : "box-shadow, transform",
                boxShadow: props.expanded ? "5px 5px 30px #404040" : (hovered ? "5px 5px 30px #404040" : "0px 0px 20px #606060"),
                transform: props.expanded ? "scale(1)" : (hovered ? "scale(1.05)" : "scale(1)"),
                order: props.expanded ? 1 : 0,
                backgroundPosition: "center",
            }}>
            {(props.expanded && props.project.expandedImages) && <div style={{
                display:"flex", 
                backgroundOrigin: "content-box", 
                position:"absolute", 
                top:"0",
                left:"0",
                width:"100%",
                height:"100%",
                borderRadius: "10px",
                }}>
                {props.project.expandedImages.map((image, index) => {

                    return(
                        <div key={index} style={{
                            backgroundImage: `url(${images(image)})`,
                            width: "100%",
                            height: "100%",
                            backgroundSize: "cover", 
                            borderRadius: "10px",
                            backgroundPosition: "center",
                        }}></div>
                    )
                })}
            </div>}
            <h1 style={{
                position:"absolute", 
                top:"0",
                transition: "opacity 0.25s ease-in-out",
                opacity: props.expanded ? 1 : (hovered ? 1 : 0),
                left: "0",
                fontSize: props.minified ? "2em" : "3em",
                backgroundColor: "rgba(0.3,0.3,0.3,0.6)",
                borderRadius: "10px",
            }}>{props.project.name}</h1>
            <p style={{
                position:"absolute", 
                bottom:"0",
                transition: "opacity 0.25s ease-in-out",
                opacity: props.expanded ? 1 : (hovered ? 1 : 0),
                left: "0",
                fontSize: props.expanded ? "1.25em" : "1em",
                backgroundColor: "rgba(0.3,0.3,0.3,0.6)",
                borderRadius: "10px",
            }}>{props.expanded ? props.project.longDescription : props.project.description}</p>
            <div 
                onMouseEnter = {() => {setExitHovered(true);}}
                onMouseLeave = {() => {setExitHovered(false);}}
                style={{
                    position:"absolute",
                    top: "5px",
                    right: "5px",
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    backgroundColor: "grey",
                    transition: "all 0.25s ease-in-out",
                    opacity: props.expanded ? (exitHovered ? 0.5 : 0) : 0,
            }}></div>
            <img 
            onMouseEnter = {() => {setExitHovered(true);}}
            onMouseLeave = {() => {setExitHovered(false);}}
            src={xIcon} alt="x icon" onClick={()=>{if(props.expanded) {props.expandCard(-1)}}} style={{
                height: "30px",
                width: "30px",
                position: "absolute",
                top: "20px",
                right: "20px",
                opacity: props.expanded ? 1 : 0,
            }}/>
        </div>
    )
}

export default ProjectCard;