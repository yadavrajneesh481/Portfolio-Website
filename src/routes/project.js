import React from 'react'
import Navbar from '../compoments/Navbar'
import Footer from '../compoments/footer'
import Hero2 from '../compoments/hero2'
import Lanuage from '../compoments/lanuage'
import Work from '../compoments/work'
const project = () => {
    return (
        <div>
            <Navbar />
            <Hero2 heading="PROJETCS" text="Some Of My Recent Works" />
            <Work />
            <Lanuage />
            <Footer />
        </div>
    )
}

export default project
