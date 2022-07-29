import React from "react";
import '../App.css';
import SkillCard from './SkillCard'

function Skills(props){

    const data = [
        {
            name: "Unity",
            image: "./unity_logo.png",
        },
        {
            name: "Unreal Engine",
            image: "./unreal_logo.png",
        },
        {
            name: "React",
            image: "./react_logo.png",
        },
        {
            name: "React Native",
            image: "./reactnative_logo.svg",
        },
        {
            name: "Redux",
            image: "./redux_logo.png",
        },
        {
            name: "Python",
            image: "./python_logo.png",
        },
        {
            name: "Git",
            image: "./git_logo.png",
        },
        {
            name: "C#",
            image: "./csharp_logo.png",
        },
        {
            name: "C++",
            image: "./cpp_logo.png",
        },
        {
            name: "C",
            image: "./c_logo.png",
        },
        {
            name: "Java",
            image: "./java_logo.png",
        },
        {
            name: "HTML 5",
            image: "./html5_logo.png",
        },
        {
            name: "CSS 3",
            image: "./css3_logo.png",
        },
        {
            name: "Javascript",
            image: "./js_logo.png",
        },
    ]

    return(
        <div className="Skills" ref={props.innerRef}>
            <h1>Skills</h1>
            <div className="Cards-container">
                {data.map((skill, index) => {
                    return(<SkillCard skill={skill} key={index} />)
                })}
            </div>
        </div>
    )
}

export default Skills;