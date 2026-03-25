import React from 'react'
import Image from "next/image";
import Link from 'next/link';

import mars from '../public/mars.png';
import trend from '../public/trend.png';

const Hero = () => {
  return (
    <div>
      <div className="flex mx-12 pt-12 justify-between items-center p-1rem bg-gray-800 text-white text-2xl">
        <div className=" p-12 relative border-l z-2 w-[800px]">
          <div className='flex items-center gap-3'>
            <Image className="opacity-100 w-5" src={trend} alt="flame" priority />
            <p className=' text-gray-500 text-4xl'>Hot NEWS:</p>
          </div>

          <h1 className="text-7xl pt-13 border-b ">MULTYPLANETARY</h1>
          <h1 className="text-6xl"> LIFE </h1>
          <p className="my-8 text-lg">SpaceX was founded under the belief that a future where humanity is out exploring the stars is fundamentally more exciting than one where we are not.</p>
          <div className=" flex justify-between items-center">
            <div >
              <input type="text" placeholder="Search similar NEWS" className=" p-4 outline-none rounded-2xl bg-gray-700 text-white outline-none" />
            </div>
            {/* <div> */}
              <Link href={'/blog'} className="p-4 bg-gray-700 rounded-2xl hover:bg-gray-700 hover:cursor-pointer hover:transform-translation ">EXPLORE →</Link>
            {/* </div> */}
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