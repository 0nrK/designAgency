import React from 'react'

const AboutInfo = () => {
    return (
        <div className="max-w-screen-xl m-auto text-white">
            <div className="flex flex-col md:flex-row rounded-lg">
                <div className="flex flex-col p-8  md:p-24 bg-red-400">
                    <h1 className="font-bold text-5xl">About Us</h1>
                    <span className="mt-8 text-xl">Ullamco occaecat consectetur et pariatur Lorem mollit. Nostrud labore adipisicing et sint tempor mollit sit veniam enim exercitation adipisicing. Lorem in officia do amet nostrud mollit reprehenderit consequat aute irure laborum proident nisi ea.</span>
                </div>
                <div className="">
                    <img
                        className="object-cover w-100"
                        alt=""
                        src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                </div>
            </div>
        </div>
    )
}

export default AboutInfo
