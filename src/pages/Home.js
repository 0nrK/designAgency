import React from 'react'
import Navbar from '../components/Navbar'
import Slide from '../components/Slide'
import Categories from '../components/Categories'
import Info from '../components/Info'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <div className="m-auto max-w-screen-xl">
                <Navbar />
                <Slide />
                <Categories />
                <Info />
            </div>
            <Footer />
        </>
    )
}

export default Home
