import React from "react";
import './header.css'

const Header = (props) => {

    const { about, skills, projects, scroll} = props

    return(
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
                    <li className="link">Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;