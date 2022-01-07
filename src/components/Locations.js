import React from 'react'

const Locations = () => {
    return (
        <div className="md:max-w-screen-xl mt-12 m-auto">
            <div className="flex flex-col md:flex-row flex-wrap  text-center justify-between">
                <div className="md:p-3 m-auto">
                    <img
                        className="object-cover rounded-full w-32 h-32"
                        src="https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt="" />
                    <h2 className="text-xl my-3 font-bold">GERMANY</h2>
                    <button className="bg-red-500 font-bold text-white px-8 py-5  rounded-md hover:ring ring-offset-50 ring-slate-500">See details</button>
                </div>
                <div className="p-3 m-auto">
                    <img
                        className="object-cover rounded-full w-32 h-32"
                        src="https://images.unsplash.com/photo-1610312278520-bcc893a3ff1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80"
                        alt="" />
                    <h2 className="text-xl my-3 font-bold">USA</h2>
                    <button className="bg-red-500 font-bold text-white px-8 py-5 rounded-md hover:ring ring-offset-50 ring-slate-500">See details</button>
                </div>
                <div className="p-3 m-auto">
                    <img
                        className="object-cover rounded-full w-32 h-32"
                        src="https://images.unsplash.com/photo-1589561454226-796a8aa89b05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80"
                        alt="" />
                    <h2 className="text-xl my-3 font-bold">TURKEY</h2>
                    <button className="bg-red-500 font-bold text-white px-8 py-5  rounded-md hover:ring ring-offset-50 ring-slate-500">See details</button>
                </div>
            </div>
        </div>
    )
}

export default Locations
