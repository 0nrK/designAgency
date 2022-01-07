import React, { useState } from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {

    const [menu, setMenu] = useState(false)



    return (
        <nav className="max-w-screen-xl m-auto">
            <div className="flex flex-row justify-between items-center  py-5 px-5 ">
                <div>
                    <Link to="/">
                        <h1 className="text-xl md:text-4xl">XYZ</h1>
                    </Link>
                </div>
                {window.screen.width > 520 ?
                    <div>
                        <ul className="flex flex-row text-sm md:text-l  space-x-3 cursor-pointer">
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
