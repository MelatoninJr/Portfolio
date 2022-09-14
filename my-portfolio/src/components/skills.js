import React from "react";
import './skills.css'
import { SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiGit, SiGithub, SiJest, SiNpm, SiFirebase, SiNodedotjs, SiMongodb, SiReact, SiAdobephotoshop, SiAdobepremierepro, SiCanva, SiWordpress } from "react-icons/si";
const Skills = (props) => {
    const { skills } = props
    return (
        <div className="skills-container" ref={skills}>
            <section className="page-break">
            <div class="custom-shape-divider-bottom-1663029468">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="helper">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>
            </section>
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
            <section className="page-break">
            <div class="custom-shape-divider-top-1663029526">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>
            </section>
        </div>
    )
}

export default Skills;