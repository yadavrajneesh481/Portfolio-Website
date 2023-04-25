import React from 'react'
import Navbar from '../compoments/Navbar'
import Footer from '../compoments/footer'
import Hero2 from '../compoments/hero2'
import Form from '../compoments/form'
const contact = () => {
    return (
        <div>
            <Navbar />
            <Hero2 heading="CONTACT" text="Lets have a chat" />
            <Form />
            <Footer />
        </div>
    )
}

export default contact
