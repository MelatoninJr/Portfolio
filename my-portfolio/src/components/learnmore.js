import React from "react";
import './learnmore.css'
import { ImArrowDown2 } from "react-icons/im";

const Learn = (props) => {
    const { about, scroll } = props
    return(
        <div className="learnmore-container" onClick={() => scroll(about)}>
            <div className="learnmore-inner-container">
                <div className="lm-content">Get to know me!</div>
                <ImArrowDown2 className="arrow-down"/>

            </div>
        </div>
    )
}


export default Learn;
