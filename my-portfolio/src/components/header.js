import React from "react";
import './header.css'

const Header = (props) => {

    return(
        <div className="header">
            <div className="inner-header-one">
                <div className="link">
                    Dillon Morrison

                </div>
            </div>
            <div className="inner-header-two">
                <ul>
                    <li className="link">About</li>
                    <li className="link">Skills</li>
                    <li className="link">Projects</li>
                    <li className="link">Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;