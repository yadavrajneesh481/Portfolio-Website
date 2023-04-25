import "./navbar.css"
import React, { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

import { Link } from "react-router-dom"


const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        } else {
            setColor(false)
        }
    }; window.addEventListener("scroll", changeColor);

    return (
        <div className={color ? "header header-bg" : "header"}>
            <Link to="/">
                <h1>PORTFOLIO</h1>
            </Link>
            <ul className={click ? "nav-menu " : "nav-menu active"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/project">Project</Link>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {
                    click ? (<FaBars size={20} style={{ color: "white" }} />) :
                        (<FaTimes size={20} style={{ color: "white" }} />)
                }


            </div>

        </div>
    )
}

export default Navbar
