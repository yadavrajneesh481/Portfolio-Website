import "./hero.css"
import React from 'react'
import intro_img from "../asstes/intro_img.jpg"
import { Link } from "react-router-dom"

const hero = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="intro_img" src={intro_img} alt="intro_img" />
            </div>
            <div className="content">
                <p>I  AM  A  FREELANCER</p>
                <h1>React Developer</h1>
                <div><Link to="/project" className="btn">Projects</Link>
                    <Link to="/contact" className="btn-light">contact</Link>
                </div>
            </div>

        </div>
    )
}

export default hero
