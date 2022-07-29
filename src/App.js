import './App.css';
import Heading from './components/Heading';
import TopBar from './components/TopBar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import { useRef } from 'react';
import React from 'react';

function App() {
  const aboutRef = useRef();
  const projectsRef = useRef();
  const skillsRef = useRef();
  const resumeRef = useRef();
  const contactRef = useRef();

  const handleClick = (ref) => {
    if(!ref.current) return;
    ref.current.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <div className='App'>
      <TopBar aboutRef={aboutRef} projectsRef={projectsRef} skillsRef={skillsRef} resumeRef={resumeRef} contactRef={contactRef} handleClick={handleClick}/>
      <Heading />
      <About innerRef={aboutRef}/>
      <Projects innerRef={projectsRef}/>
      <Skills innerRef={skillsRef}/>
      <Resume innerRef={resumeRef}/>
      <Contact innerRef={contactRef}/>
      <p className='footer' style={{color:"grey", fontSize:"1em"}}>Designed and developed by Andy Kotz</p>
    </div>
  );
}

export default App;
