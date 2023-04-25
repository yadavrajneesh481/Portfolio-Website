import "./workcard.css"
import React from 'react'

import { Link } from "react-router-dom"
const Workcard = (props) => {
    return (
        <div className="project-card">
            <img src={props.imgsrc} alt="img" />
            <h2 className="project-title">{props.title}</h2>
            <div className="pro-details">
                <p>{props.text}</p>
                <div className="pro-btns">
                    <Link to={props.view} className="btn">view</Link>
                    <Link to="url.com" className="btn">source</Link>
                </div>
            </div>
        </div>
    )
}

export default Workcard
