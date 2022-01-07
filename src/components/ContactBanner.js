import React, { useState } from 'react'

const ContactBanner = () => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phoneNum, setPhoneNum] = useState()


    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <div className="max-w-screen-xl m-auto">
            <div className="flex flex-col  md:flex-row bg-red-400 md:p-24">
                <div className="flex flex-col p-8 md:p-0 md:w-1/2">
                    <h1 className="text-3xl md:text-5xl font-bold text-red-900">Contact Us</h1>
                    <p className="mt-4 text-l md:text-2xl text-gray-100">Velit reprehenderit fugiat laboris anim esse. Incididunt culpa Lorem cillum enim aliqua nostrud fugiat tempor officia ullamco culpa. Aute aute duis non eu sunt quis minim id. Amet in labore laboris aute nulla non occaecat consequat aliquip consectetur occaecat excepteur Lorem. Excepteur sint eiusmod eu aliquip aliquip ut qui.</p>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col align-items justify-center text-center p-4 md:ml-auto space-y-4">
                    <input
                        className="p-3 text-xl focus:ring-2 focus:ring-inset-2"
                        type="text"
                        name="name"
                        onChange={(e) => setName(e.current.target)}
                        placeholder="Name:" />
                    <input
                        className="p-3 text-xl focus:ring-2 focus:ring-inset-2"
                        type="tel"
                        name="phoneNum"
                        onChange={(e) => setPhoneNum(e.current.target)}
                        placeholder="Phone Number:" />
                    <input
                        className="p-3 text-xl focus:ring-2 focus:ring-inset-2"
                        type="email"
                        name="email"
                        onChange={(e) => setEmail(e.current.target)}
                        placeholder="E-mail:" />
                    <button
                        className="p-5 text-xl  bg-slate-900  text-white font-bold rounded-md"
                        type="submit">Submit</button>
                </form>
            </div>
        </div >
    )
}

export default ContactBanner
