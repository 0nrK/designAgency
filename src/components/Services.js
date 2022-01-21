import React from 'react'

const Services = () => {
    return (
        <div >
            <div className="flex flex-col flex-wrap md:space-y-0 space-y-4 p-4 grayscale md:flex-row justify-around align-center py-32">
                <div className="relative cursor-pointer shadow-lg  flex flex-1  justify-center align-center text-center  ">
                    <img
                        className="object-cover h-96 md:h-auto"
                        alt=""
                        src="https://images.unsplash.com/photo-1592890288564-76628a30a657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                    <div className="absolute top-1/2  text-center">
                        <h2 className="font-bold text-white text-4xl">APP DESIGN</h2>
                        <span className="text-white text-l">SEE PROJECTS</span>
                    </div>
                </div>
                <div className="relative flex flex-1 drop-shadow-lg  justify-center align-center text-center h-96 cursor-pointer">
                    <img
                        className="object-cover h-96 md:h-auto"
                        alt=""
                        src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" />
                    <div className="absolute top-1/2 ml-auto text-center">
                        <h2 className="font-bold  text-white  text-4xl">WEB DESIGN</h2>
                        <span className="text-white text-l">SEE PROJECTS</span>
                    </div>
                </div>
                <div className="relative flex flex-1 drop-shadow-lg justify-center align-center cursor-pointer  ">
                    <img
                        className="object-cover h-96 md:h-auto"
                        alt=""
                        src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" />
                    <div className="absolute top-1/2  text-center">
                        <h2 className=" font-bold text-white text-4xl">GRAPHIC DESIGN</h2>
                        <span className="text-white text-l">SEE PROJECTS</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
