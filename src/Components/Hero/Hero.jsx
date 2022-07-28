import React from 'react'
import Button from "../Button/Button"

function Hero() {
    return ( 
        <div className="h-screen text-white mt-24 mx-10 flex-col text-center">
            <h3 className="my-6 mx-auto text-green-400 font-bold w-2/3 py-4">GROWING WITH DATA ANALYTICS</h3>
            <h1 className="font-bold text-2xl">Grow with data</h1>
            <p className='mt-4 md:text-2xl hover:text-white ease-in-out duration-300 text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
            <Button info={"text-black bg-green-400 mt-20"}/>
        </div>

     );
}

export default Hero;