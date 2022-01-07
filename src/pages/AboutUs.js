import React from 'react'
import AboutInfo from '../components/AboutInfo'
import Footer from '../components/Footer'
import Locations from '../components/Locations'
import Navbar from '../components/Navbar'
import Professional from '../components/Professional'

const AboutUs = () => {
    return (
        <div>
            <Navbar />
            <AboutInfo />
            <Professional />
            <Locations />
            <Footer />
        </div>
    )
}

export default AboutUs
