import React from 'react'
import { FcBarChart, FcCustomerSupport, FcMoneyTransfer } from "react-icons/fc";


const Info = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row space-y-12 p-4 justify-center align-center text-center pb-36">
                <div className="flex flex-col justify-center align-center">
                    <FcCustomerSupport className="m-auto text-9xl" />
                    <h3 className="text-3xl font-bold pb-7">Customer Support</h3>
                    <span className="text-l">Magna quis nulla dolore non consequat ullamco tempor reprehenderit culpa sint sint aliquip consequat. Commodo duis sint incididunt aliquip amet Lorem.</span>
                </div>
                <div>
                    <FcBarChart className="m-auto text-9xl" />
                    <h3 className="text-3xl font-bold pb-7">Boost Your Traffic</h3>
                    <span className="text-l">Eiusmod deserunt consectetur laborum fugiat occaecat Lorem laboris et occaecat reprehenderit ad exercitation consequat. Eu laboris mollit tempor fugiat voluptate reprehenderit.</span>
                </div>
                <div>
                    <FcMoneyTransfer className="m-auto text-9xl" />
                    <h3 className="text-3xl font-bold pb-7">Easy Payment Methods</h3>
                    <span className="text-l">Anim est est culpa duis. Nostrud fugiat sint sint minim nulla culpa consectetur est ea voluptate id. Dolore aliquip et nisi anim. Reprehenderit aliqua eu esse non quis sit ut reprehenderit.</span>
                </div>
            </div>
        </div>
    )
}

export default Info
