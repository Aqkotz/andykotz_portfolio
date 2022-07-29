import React from 'react';
import {useState} from 'react';

function ProjectCard(props){

    const [hovered, setHovered] = useState(false);

    const images = require.context('../assets', true);

    return(
        <div 
            onMouseEnter = {() => {setHovered(true);}} 
            onMouseLeave = {() => {setHovered(false);}}
            className='Card' 
            style={{
                backgroundImage:  `url(${images(props.skill.image)})`,
                backgroundSize: "cover", 
                backgroundColor: "#7bacac", 
                width: "120px", 
                height: "120px",
                padding: "20px",
                transition: "all 0.25s ease-in-out",
                boxShadow: hovered ? "5px 5px 30px #404040" : "0px 0px 20px #606060",
                transform: hovered ? "scale(1.05)" : "scale(1)",
                backgroundPosition: "center",
                backgroundOrigin: "content-box",
                backgroundRepeat: "no-repeat",
            }}>
            <div className='CardCover' style={{opacity: hovered ? 0.5 : 0,}}>
            </div>
            <h1 style={{
                position:"absolute", 
                top:"0",
                transition: "all 0.25s ease-in-out",
                opacity: hovered ? 1 : 0,
                left: "3px",
                fontSize: "1.7em",
            }}>{props.skill.name}</h1>
        </div>
    )
}

export default ProjectCard;