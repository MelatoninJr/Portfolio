import React from "react";
import './aboutme.css'

const AboutMe = () => {

    return(
        <div className="about-container">
            <div className="about-context-container">
                <div className="pfp-container">
                </div>
                <div className="content-container">
                    <div className="content-header">
                        About Me
                    </div>
                    <div className="content-inside-container">
                        Can a tax accountant make the leap into the world of tech? <br></br><br></br>
                        Hi, I'm Dillon a self-taught web developer. While these two fields might seem quite
                        different they both satisfy my itch for problem solving! Growing up I was always dabbling
                        in creating different types of websites, branding, and projects. The one thing I would always be missing
                        from my toolkit was programming. Now it's time to change that!
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;