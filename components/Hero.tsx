import React from 'react'
import Image from "next/image";

import mars from '../public/mars.png';

const Hero = () => {
  return (
    <div>
        <div className="flex mx-12 pt-12 justify-between items-center p-1rem bg-gray-800 text-white text-2xl">
        <div className=" p-12 border-l z-2 w-[800px]">
          <h1 className="text-7xl border-b ">MULTYPLANETARY</h1>
          <h1 className="text-6xl"> LIFE </h1>
          <p className="my-8 text-lg">SpaceX was founded under the belief that a future where humanity is out exploring the stars is fundamentally more exciting than one where we are not.</p>
          <div className=" flex justify-evenly">
            <div >
            <input type="text" placeholder="Search News....." className=" p-4 outline-none rounded-2xl bg-gray-700 text-white outline-none" />
            </div>
            <div>
            <button className="p-4 bg-gray-700 rounded-2xl hover:bg-gray-700 hover:cursor-pointer ">Explore →</button>
            </div>
          </div>
        </div>
        <div className=' rounded-xl shadow-white transition-shadow duration-300 hover:cursor-pointer hover:shadow-[0_0_20px_white]'>
          <Image className="rounded-xl " src={mars} alt="mars" priority />
        </div>
      </div>
    </div>
  )
}

export default Hero