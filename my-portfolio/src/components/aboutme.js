import React from "react";
import './aboutme.css'
import Dillon from '../assets/dillon.png'
import Corgi from '../assets/corgi.png'
import WPM from '../assets/computer-keyboard.png'
import Barbell from '../assets/barbell.png'
import Jpeg from '../assets/jpeg.png'
import Rubix from '../assets/rubik.png'
import Anime from '../assets/anime.png'
import Celiac from '../assets/celiac.png'
import Darts from '../assets/darts.png'

const AboutMe = (props) => {
    const { about } = props

    return(
        <div className="about-container"ref={about}>
            <div className="about-context-container">
                <div className="pfp-container">
                    <div className="pfp-circle-container">
                        <img src={Dillon} className='dillon-pfp'></img>
                    </div>
                    <div className="cool-facts-container">
                        <div className="cool-facts-title">Fun Facts!</div>
                        <div className="cool-facts-tile-container">
                        <div className="fun-fact">Corgi Enthusiast<img src={Corgi} className='fun-pic'></img></div>
                        <div className="fun-fact">WPM - 162<img src={WPM} className='fun-pic'></img></div>
                        <div className="fun-fact">5 Years of Fitness<img src={Barbell} className='fun-pic'></img></div>
                        <div className="fun-fact">NFT/Web3 Builder<img src={Jpeg} className='fun-pic'></img></div>
                        <div className="fun-fact">Rubix Cuber<img src={Rubix} className='fun-pic'></img></div>
                        <div className="fun-fact">Anime Enjoyer<img src={Anime} className='fun-pic'></img></div>
                        <div className="fun-fact">Celiac<img src={Celiac} className='fun-pic'></img></div>
                        <div className="fun-fact">Ex-World Archer<img src={Darts} className='fun-pic'></img></div>


                    </div>
                    </div>

                </div>
                <div className="content-container">
                    <div className="content-header">
                        About Me
                    </div>
                    <div className="content-inside-container">
                        Can a tax accountant 📊 make the  leap into the world of tech? 💻 <br></br><br></br>
                        Hi, I'm Dillon a self-taught web developer. While these two fields might seem quite
                        different they both satisfy my itch for problem solving! Growing up I was always dabbling
                        in creating different types of websites, branding, and projects. The one thing I would always find myself missing
                        from my toolkit was programming. Now it's time to change that!
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;