import React, { useState } from "react";
import '../App.css';
import ProjectCard from './ProjectCard'

function Projects(props){

    const [expandedIdx, setExpandedIdx] = useState(-1);

    const data = [
        {
            name: "Veridium",
            description: "Veridium is a virtual reality chemistry education app",
            longDescription: "Veridium is a virtual reality chemistry education app developed in Unity for Oculus Quest. The app is intended for use by university students. I was a developer and developer mentor working constantly for nine months to develop the app.",
            image: "./Veridium.png",
            expandedImages: [
                "./Veridium.png",
                "./Veridium.png",
            ],
        },
        {
            name: "Sign Language Space Adventure",
            description: "American Sign Language educational game in VR",
            longDescription: "Sign Language Space Adventure is a game developed in Unity for Oculus Quest, and it aims to educate hearing people on sign language and finger spelling using interactive lessons utilizing hand motion tracking.",
        },
        {
            name: "Anivision",
            description: "Immersively experience unique animal perceptual traits",
            longDescription: "Anivision is an educational virtual reality experience that allows users to experience unusual perceptual systems of animals including pit vipers, honey bees, and tarsiers.",
        },
        {
            name: "FitWit",
            description: "Community-based fitness app",
            longDescription: "FitWit is a community-based fitness app that allows users to connect with friends and coworkers with an appealing food-based fitness experience.",
        },
        {
            name: "In Our Midst",
            description: "A 3D Among us recreation in Unreal Engine 4",
            longDescription: "In Our Midst is a one-to-one 3D recreation of the popular game Among Us. I solely developed and designed the app in Unreal Engine 4.",
        },
        {
            name: "This Website",
            description: "My personal website and project portfolio",
            longDescription: "This website is a personal portfolio that I developed from scratch in React.js.",
        },
    ]

    const expandCard = (index) => {
        setExpandedIdx(index);
    }

    return(
        <div className="Projects" ref={props.innerRef}>
            <h1>Projects</h1>
            <div className="Cards-container">
                {data.map((project, index) => {
                    return(<ProjectCard 
                        project={project} 
                        key={index} 
                        id={index} 
                        expandCard={expandCard} 
                        expanded={expandedIdx === index} 
                        minified={expandedIdx !== index && expandedIdx !== -1}
                    />)
                })}
            </div>
        </div>
    )
}

export default Projects;