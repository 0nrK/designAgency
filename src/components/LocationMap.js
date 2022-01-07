import React from 'react'

const LocationMap = () => {
    return (
        <div className="max-w-screen-xl m-auto mt-24">
            <div className="space-y-16 ">
                <div className="flex flex-col  md:flex-row flex-wrap md:flex-nowrap align-center justify-center rounded-md">
                    <img src="https://i.ibb.co/J3sDw7c/Screenshot-from-2022-01-04-22-01-50.png" alt="" />
                    <div className="p-5 md:p-12 md:ml-8 bg-red-100 space-y-5">
                        <h1 className="text-4xl text-red-600 font-bold">GERMANY</h1>
                        <p className="mt-12 text-l">Fugiat eiusmod ut duis aliqua et incididunt aute. Dolor nostrud eiusmod excepteur.</p>
                    </div>
                </div>
                <div className="flex flex-col  md:flex-row  md:flex-nowrap flex-wrap align-center justify-center rounded-md">
                    <div className="p-5 md:p-12 md:mr-8 bg-red-100 space-y-5">
                        <h1 className="text-4xl text-red-600 font-bold">USA</h1>
                        <p>Fugiat eiusmod ut duis aliqua et incididunt aute. Dolor nostrud eiusmod excepteur.</p>
                    </div>
                    <img src="https://i.ibb.co/J3sDw7c/Screenshot-from-2022-01-04-22-01-50.png" alt="" />
                </div>
                <div className="flex flex-col  md:flex-row md:flex-nowrap flex-wrap align-center justify-center rounded-md">
                    <img src="https://i.ibb.co/J3sDw7c/Screenshot-from-2022-01-04-22-01-50.png" alt="" />
                    <div className="p-5 md:p-12 md:ml-8 bg-red-100 space-y-5">
                        <h1 className="text-4xl text-red-600 font-bold">TURKEY</h1>
                        <p>Fugiat eiusmod ut duis aliqua et incididunt aute. Dolor nostrud eiusmod excepteur.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LocationMap
