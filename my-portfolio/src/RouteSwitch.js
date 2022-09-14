import { BrowserRouter, Routes, Route, Link, Outlet, HashRouter } from "react-router-dom";
import React  from 'react';
import Header from './components/header'
import Intro from './components/introbody'
import './RouteSwitch.css'
import './index.css'
import LearnMore from './components/learnmore'
import AboutMe from './components/aboutme'
import Skills from './components/skills'
import Projects from './components/projects'
import { useRef } from "react";

const RouteSwitch = () => {
    const about = useRef(null)
    const skills = useRef(null)
    const projects = useRef(null)

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        })
    }

    return (
        <div>
        <Header about={about} skills={skills} projects={projects} scroll={scrollToSection}/>
        <Intro />
        <LearnMore scroll={scrollToSection} about={about}/>
        <AboutMe about={about}/>
        <Skills skills={skills}/>
        <Projects projects={projects}/>
        </div>

  
    )
}

export default RouteSwitch;