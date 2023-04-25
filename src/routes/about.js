import React from 'react'
import Navbar from '../compoments/Navbar'
import Footer from '../compoments/footer'
import Hero2 from '../compoments/hero2'
import About from "../compoments/aboutcontent"

const about = () => {
    return (
        <div>
            <Navbar />
            <Hero2 heading="ABOUT" text="I am a friendly front-end developer" />
            <About />
            <Footer />
        </div>
    )
}

export default about
