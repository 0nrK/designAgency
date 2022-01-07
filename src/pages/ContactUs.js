import React from 'react'
import Navbar from '../components/Navbar'
import Locations from '../components/Locations'
import Footer from '../components/Footer'
import ContactBanner from '../components/ContactBanner'
import LocationMap from '../components/LocationMap'


const ContactUs = () => {
    return (
        <div>
            <Navbar />
            <ContactBanner />
            <Locations />
            <Footer />
        </div>
    )
}

export default ContactUs
