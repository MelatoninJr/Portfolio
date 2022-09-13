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

const RouteSwitch = () => {

    return (
        <div>
        <Header />
        <Intro />
        <LearnMore />
        <AboutMe />
        <Skills />
        <Projects />
        </div>

  
    )
}

export default RouteSwitch;