import "./footer.css"

import React from 'react'
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa'
import { Link } from 'react-router-dom';
const footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
                        <div>
                            <p>123 Housing Society</p>
                            <p>India</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: "white", marginRight: "2rem" }} />7517509565</h4>
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{ color: "white", marginRight: "2rem" }} />yadavrajneesh481@gmail.com</h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About Me</h4>
                    <p>I am a developer </p>
                    <div className="social">
                        <Link to="https://www.facebook.com/login/"><FaFacebook size={30} style={{ color: "white", marginRight: "1rem" }} />
                        </Link>
                        <Link to="https://www.instagram.com/india_ka_ladka/"><FaInstagram size={30} style={{ color: "white", marginRight: "1rem" }} />
                        </Link>
                        <Link to="https://www.linkedin.com/in/rajneesh-yadav-31947b1b6/">
                            <FaLinkedin size={30} style={{ color: "white", marginRight: "1rem" }} />
                        </Link>



                    </div>
                </div>
            </div>

        </div>
    )
}

export default footer

