import "./lanuage.css"
import React from 'react'
import { Link } from "react-router-dom"

const lanuage = () => {
    return (
        <div className="lanuage">
            <div className="card-continer">
                <div className="card">

                    <h3>- Language -</h3>

                    <span className="bar"></span>

                    <p className="btc">C++</p>
                    <p>- 3 Days -</p>

                    <p>- 3 Pages -</p>

                    <p>- Featured -</p>
                    <p>- Responsive Design -</p>

                    <Link to="/contact" className="btn">

                        CONTACT NOW

                    </Link>

                </div>
                <div className="card">

                    <h3>- Language -</h3>

                    <span className="bar"></span>

                    <p className="btc">PYTHON</p>
                    <p>- 3 Days -</p>

                    <p>- 3 Pages -</p>

                    <p>- Featured -</p>
                    <p>- Responsive Design -</p>

                    <Link to="/contact" className="btn">

                        CONTACT NOW

                    </Link>

                </div>
                <div className="card">

                    <h3>- Language -</h3>

                    <span className="bar"></span>

                    <p className="btc">WEB DEVELOPMENT</p>
                    <p>- 3 Days -</p>

                    <p>- 3 Pages -</p>

                    <p>- Featured -</p>
                    <p>- Responsive Design -</p>

                    <Link to="/contact" className="btn">

                        CONTACT NOW

                    </Link>

                </div>
            </div>

        </div>
    )
}

export default lanuage
