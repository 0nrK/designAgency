import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {

    const [menu, setMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {

        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }


    }, [])

    return (
        <nav className="max-w-screen-xl m-auto">
            <div className="flex flex-row justify-between items-center  py-5 px-5 ">
                <div>
                    <Link to="/">
                        <h1 className="text-xl md:text-4xl">XYZ</h1>
                    </Link>
                </div>
                {screenWidth > 768 ?
                    <div className="">
                        <ul className="flex flex-row  text-sm md:text-l  space-x-3 cursor-pointer">
                            <Link to="/about-us">
                                <li className="hover:underline">OUR COMPANY</li>
                            </Link>
                            <Link to="/locations">
                                <li className="hover:underline">LOCATIONS</li>
                            </Link>
                            <Link to="/contact-us">
                                <li className="hover:underline">CONTACT</li>
                            </Link>
                        </ul>
                    </div>
                    :
                    <div onClick={() => setMenu(!menu)} >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                        </svg>
                    </div>
                }
            </div>
            {menu
                &&
                <div className="flex flex-col  text-white bg-red-900 z-50 absolute h-screen w-screen">
                    <ul className="flex flex-col space-y-20 text-center justify-center align-center mt-24 cursor-pointer">
                        <Link to="/about-us">
                            <li className="hover:underline">OUR COMPANY</li>
                        </Link>
                        <Link to="/locations">
                            <li className="hover:underline">LOCATIONS</li>
                        </Link>
                        <Link to="/contact-us">
                            <li className="hover:underline">CONTACT</li>
                        </Link>
                    </ul>
                </div>
            }
        </nav>
    )
}

export default Navbar
