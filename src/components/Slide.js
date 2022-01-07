import React from 'react'

const Slide = () => {
    return (
        <div className="shadow-2xl flex shrink flex-1">
            <div className="bg-red-500 text-white break-words flex flex-col md:flex-row rounded-lg">
                <div className="space-y-16 p-12 md:py-24  md:ml-12">
                    <h1 className="text-xl md:text-4xl font-bold">First quality designs and solutions for your digital brand</h1>
                    <h4 className="text-l">Lorem consequat consectetur ea ut adipisicing aute velit elit ut nisi do ipsum quis elit. Exercitation enim officia laborum.</h4>
                    <button className="p-5 rounded-md bg-white text-black hover:ring ring-inset-50 ring-slate-500 ">LEARN MORE</button>
                </div>
                <div className="flex justify-center self-center">
                    <img
                        className="w-4/5 pb-4 rounded-md"
                        alt=""
                        src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80"></img>
                </div>
            </div>
        </div>
    )
}

export default Slide
