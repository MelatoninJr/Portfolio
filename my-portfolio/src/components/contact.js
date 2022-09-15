import React from "react";
import './contact.css'
import { BsGithub, BsLink, BsLinkedin, BsMailbox2 } from "react-icons/bs";
const Contact = (props) => {

    const {contact} = props

    return (

        <div className="footer-container" ref={contact}>
            <div className="footer-icon-container">
               <a href="https://github.com/MelatoninJr" className="" target="_blank"> <BsGithub className="git-icon-two"/></a>
                <a href="https://www.linkedin.com/in/dillon-morrison-b0862b204/" target="_blank"><BsLinkedin className="git-icon-two"/></a>
                <a href="mailto:dillonjmorrison@gmail.com" target="_blank"><BsMailbox2 className="git-icon-two"/></a>
            </div>
         
        </div>
    )
}

export default Contact;