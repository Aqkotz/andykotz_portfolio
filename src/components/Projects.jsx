import React, { useState } from "react";
import '../App.css';
import ProjectCard from './ProjectCard'

function Projects(props){

    const [expandedIdx, setExpandedIdx] = useState(-1);

    const data = [
        {
            name: "Veridium",
            description: "A virtual reality chemistry education app",
            longDescription: "Veridium is a virtual reality chemistry education app developed in Unity for Oculus Quest. The app is intended for use by university students. I was a developer and developer mentor working consistantly for nine months to develop the app.",
            image: "./Veridium.png",
            expandedImages: [
                "./Veridium_3.png",
                "./Veridium_1.png",
                "./Veridium_2.png",
            ],
            contributions:"Tactile Interaction, Input Systems, 3D Modelling, Created Lecture Animation Drivers, Programmed Lectures, Deployment"
        },
        {
            name: "Sign Language Space Adventure",
            description: "American Sign Language educational game in VR",
            longDescription: "Sign Language Space Adventure is a game developed in Unity for Oculus Quest, and it aims to educate hearing people on sign language and finger spelling using interactive lessons utilizing hand motion tracking.",
            image: "./SLSA.png",
            expandedImages: [
                "./SLSA_1.png",
                //"./SLSA_2.png",
            ],
            contributions:"",
        },
        {
            name: "Anivision",
            description: "Immersively experience unique animal perceptual traits",
            longDescription: "Anivision is an educational virtual reality experience that allows users to experience unusual perceptual systems of animals including pit vipers, honey bees, and tarsiers.",
            image: "./Anivision.png",
            expandedImages: [
                "./Anivision_1.png",
            ],
        },
        {
            name: "FitWit",
            description: "A Community-based fitness app",
            longDescription: "FitWit is a community-based fitness app that allows users to connect with friends and coworkers with an appealing food-based fitness experience.",
            image: "./FitWit.png",
            expandedImages: [
                "./FitWit_1.png",
                "./FitWit_2.png",
                "./FitWit_3.png",
                "./FitWit_4.png",
            ],

        },
        {
            name: "In Our Midst",
            description: "A 3D Among Us recreation in Unreal Engine 4",
            longDescription: "In Our Midst is a one-to-one 3D recreation of the popular game Among Us. I solely developed and designed the app in Unreal Engine 4.",
            image: "./InOurMidst_1.png",
            expandedImages: [
                "./InOurMidst_2.png",
                "./InOurMidst_3.png",
            ],
        },
        {
            name: "This Website",
            description: "My personal website and project portfolio",
            longDescription: "This website is a personal portfolio that I developed from scratch in React.js.",
            image: "./Website.png",
            expandedImages: [
                "./Website_1.png",
                "./Website_2.png",
            ],
        },
    ]

    const expandCard = (index) => {
        setExpandedIdx(index);
    }

    return(
        <div className="Projects" ref={props.innerRef}>
            <div style={{display:"flex", alignItems:"baseline"}}>
                <h1>Projects</h1>
                <p style={{color:"#afafaf"}}>Click to expand</p>
            </div>
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