import React from 'react'
import Image from "next/image";
import Link from 'next/link';

import mars from '../public/mars.png';
import trend from '../public/trend.png';
import search from '../public/search.png';

const Hero = () => {
  return (
    <div className='bg-gray-800 text-white text-2xl'>
      <div className=" flex mx-12 pt-12 justify-between items-center p-1rem ">
        <div className="p-6 lg:w-[50%] xl:w-[50%] 2xl:w-[50%]  relative border-l z-2 w-[800px]">
          <div className='flex items-center gap-3'>
            <Image className="opacity-100 w-5" src={trend} alt="flame" priority />
            <p className=' text-gray-500 text-4xl'>Hot NEWS</p>
          </div>
          <Link href={'/blog/3'} className="text-6xl pt-5 border-b ">MULTYPLANETARY</Link>
          <h1 className="text-5xl"> LIFE </h1>
          <p className="mt-4 text-lg">SpaceX was founded under the belief that a future where humanity is out exploring the stars is fundamentally more exciting than one where we are not.</p>
        </div>
        <div className='rounded-xl xl:w-[50%] shadow-white transition-shadow duration-300 hover:cursor-pointer hover:shadow-[0_0_20px_white]'>
          <Image className="rounded-xl " src={mars} alt="mars" priority />
        </div>
      </div>
      <div className="px-12 flex justify-evenly items-center">
        <div className='flex'>
          <input type="text" placeholder="Search similar NEWS" className=" px-6 h-12 outline-none rounded-full bg-gray-700 text-white outline-none" />
          <Image className='border w-12 hover:cursor-pointer' src={search} alt="search" />
        </div>
        <Link href={'/blog'} className="text-center px-3 flex justify-center items-center h-12  bg-gray-600 rounded-full hover:bg-gray-700 hover:transition-transform hover:scale-[1.1] hover:duration-700 hover:cursor-pointer hover:transform-translation ">EXPLORE →</Link>
      </div>

    </div>
  )
}

export default Hero