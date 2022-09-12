import React from "react";
import './skills.css'
import { SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiGit, SiGithub, SiJest, SiNpm, SiFirebase, SiNodedotjs, SiMongodb, SiReact, SiAdobephotoshop, SiAdobepremierepro, SiCanva, SiWordpress } from "react-icons/si";
const Skills = () => {
    return (
        <div className="skills-container">
            <div className="skills-inner-one">

                <div className="skills-holder-one">

                    <div className="skill-content-container">
                        <SiJavascript className="skill-icon"/>
                        <div className="skill-name-container">Javascript</div>
                    </div>
                    <div className="skill-content-container">
                        <SiHtml5 className="skill-icon"/>
                        <div className="skill-name-container">HTML5</div>
                    </div>
                    <div className="skill-content-container">
                        <SiCss3 className="skill-icon"/>
                        <div className="skill-name-container">CSS</div>
                    </div>
                    <div className="skill-content-container">
                        <SiReact className="skill-icon"/>
                        <div className="skill-name-container">React</div>
                    </div>

                </div>
                <div className="skills-holder-one">

                    <div className="skill-content-container">
                            <SiFirebase className="skill-icon"/>
                            <div className="skill-name-container">Firebase</div>
                    </div>
                    <div className="skill-content-container">
                            <SiNodedotjs className="skill-icon"/>
                            <div className="skill-name-container">Node Js</div>
                    </div>
                    <div className="skill-content-container">
                            <SiMongodb className="skill-icon"/>
                            <div className="skill-name-container">MongoDb</div>
                    </div>
                    <div className="skill-content-container">
                            <SiTailwindcss className="skill-icon"/>
                            <div className="skill-name-container">Tailwind</div>
                    </div>

                    </div>
                <div className="skills-holder-one">

                    <div className="skill-content-container">
                            <SiGit className="skill-icon"/>
                            <div className="skill-name-container">Git</div>
                    </div>
                    <div className="skill-content-container">
                            <SiGithub className="skill-icon"/>
                            <div className="skill-name-container">Github</div>
                    </div>
                    <div className="skill-content-container">
                            <SiJest className="skill-icon"/>
                            <div className="skill-name-container">Jest</div>
                    </div>
                    <div className="skill-content-container">
                            <SiNpm className="skill-icon"/>
                            <div className="skill-name-container">Npm</div>
                    </div>

                </div>
                <div className="skills-holder-one">

                    <div className="skill-content-container">
                            <SiAdobephotoshop className="skill-icon"/>
                            <div className="skill-name-container">Photoshop</div>
                    </div>
                    <div className="skill-content-container">
                            <SiAdobepremierepro className="skill-icon"/>
                            <div className="skill-name-container">Premiere Pro</div>
                    </div>
                    <div className="skill-content-container">
                            <SiCanva className="skill-icon"/>
                            <div className="skill-name-container">Canva</div>
                    </div>
                    <div className="skill-content-container">
                            <SiWordpress className="skill-icon"/>
                            <div className="skill-name-container">Wordpress</div>
                    </div>

                    </div>

            </div>
        </div>
    )
}

export default Skills;