import "./aboutcontent.css"
import React from 'react'
import { Link } from "react-router-dom"
import React1 from "../asstes/react1.jpg"
import React2 from "../asstes/react2.webp"


const aboutcontent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Who Am I</h1>
                <p> I am a front end developer. I create responsive secure website for my clients.</p>
                <Link to="/contact">
                    <button className="btn">Contact</button>
                </Link>
            </div>
            <div className="right">
                <div className="img-continer">
                    <div className="img-stack top">
                        <img src={React1} className="img" alt="true" />
                    </div>
                    <div className="img-stack bottom">
                        <img src={React2} className="img" alt="true" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default aboutcontent
