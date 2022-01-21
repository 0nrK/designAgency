import React from 'react'
import Navbar from '../components/Navbar'
import Slide from '../components/Slide'
import Info from '../components/Info'
import Footer from '../components/Footer'
import Services from '../components/Services'

const Home = () => {
    return (
        <>
            <div className="m-auto max-w-screen-xl">
                <Navbar />
                <Slide />
                <Services />
                <Info />
            </div>
            <Footer />
        </>
    )
}

export default Home
