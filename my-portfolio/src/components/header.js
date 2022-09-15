import React from "react";
import './header.css'

const Header = (props) => {

    const { about, skills, projects, scroll, contact} = props

    return(
        <div className="header-container-two">
                    <div className="header">
            <div className="inner-header-one">
                <div className="link">
                    Dillon Morrison

                </div>
            </div>
            <div className="inner-header-two">
                <ul>
                    <li className="link" onClick={() => scroll(about)} >About</li>
                    <li className="link" onClick={() => scroll(skills)}>Skills</li>
                    <li className="link" onClick={() => scroll(projects)}>Projects</li>
                    <li className="link" onClick={() => scroll(contact)}>Contact</li>
                </ul>
            </div>
        </div>

            <div className="additional-text-container">Howdy, I'm <span className="hov">Dillon</span><br />I <span className="hov">make</span> things <span className="hov">happen</span> </div>
        </div>

    )
}

export default Header;