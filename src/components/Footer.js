import React from 'react'
import { TiSocialFacebook, TiSocialInstagram, TiSocialTwitterCircular } from "react-icons/ti"

const Footer = () => {
    return (
        <footer className="m-auto mt-12">
            <div className="m-auto text-white">
                <div
                    className="md:relative shadow-2xl md:w-3/4 md:-bottom-12 flex flex-col text-center space-y-4 justify-between p-8 md:p-16 text-white  md:flex-row h-auto rounded-md m-auto bg-red-400">

                    <div className="">
                        <h1 className="text-2xl md:text-5xl pb-4 font-bold">Let's talk about your project</h1>
                        <span className="text-md md:text-xl">Incididunt nostrud reprehenderit elit consequat irure non velit duis irure.</span>
                    </div>
                    <div className="md:absolute md:bottom-5 md:right-10">
                        <button className="p-5 text-xl bg-white text-black rounded-md hover:ring ring-inset-50 ring-slate-500">GET IN TOUCH</button>
                    </div>

                </div>
                <div className="bg-slate-900 p-4 m-auto">
                    <div className="py-12 pt-24 m-auto " >
                        <div className="flex flex-row justify-between text-l">
                            <h2 className="text-3xl ml-4">XYZ</h2>
                            <ul className="flex flex-col mr-4 md:flex-row md:space-x-12">
                                <li>OUR COMPANY</li>
                                <li>LOCATIONS</li>
                                <li>CONTACT</li>
                            </ul>
                        </div>
                        <hr className="my-8" />
                        <div className="flex flex-col  space-y-4 ml-12 md:flex-row justify-between mt-12 pb-20 ">
                            <div className="flex flex-col ">
                                <h4 className="text-xl font-bold mb-3">XYZ Office Address</h4>
                                <span>123 Main Street</span>
                                <span>Antalya,Turkey</span>
                            </div>
                            <div className="flex flex-col">
                                <h4 className="text-xl font-bold mb-3">Contact us </h4>
                                <span>P: +90XXXXXXX</span>
                                <span>M: xxxxx@gmail.com</span>
                            </div>
                            <div className="flex flex-row text-4xl space-x-8">
                                <TiSocialInstagram className="cursor-pointer" />
                                <TiSocialFacebook className="cursor-pointer" />
                                <TiSocialTwitterCircular className="cursor-pointer" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer
