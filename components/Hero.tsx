import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import {posts} from '../app/data';

import mars from '../public/mars.png';
import trend from '../public/trend.png';
import search from '../public/search.png';

const Hero = () => {
  const post = posts.find(p => p.id === 2);
    if (!post) {
    return <div className='p-10 text-2xl bg-red-500 text-white'>hero product not found</div>
  }
  return (
    <div className='bg-gray-800 text-white text-2xl'>
      <div className=" mb-2 flex mx-12 pt-12 justify-between items-center p-1rem ">
        <div className="p-6 lg:w-[50%] xl:w-[50%] 2xl:w-[50%]  relative border-t border-l z-2 w-[800px]">
          <div className='flex items-center gap-3'>
            <Image className="opacity-100 w-5" src={trend} alt="flame" priority />
            <p className=' text-gray-500 text-4xl'>Hot NEWS</p>
          </div>
          <Link href={`/blog/${post.id}`} className="text-6xl pt-5 ">{post?.title}</Link>
          <p className="mt-4 text-lg text-justify">{post.desc}</p>
        </div>
        <div className='rounded-xl xl:w-[50%] shadow-white transition-shadow duration-300 hover:cursor-pointer hover:shadow-[0_0_20px_white]'>
          <Image className="rounded-xl " src={post.img} alt="hero_Image" priority />
        </div>
      </div>
      <div className="px-2 md:px-12 flex justify-evenly items-center">
        <div className='flex '>
          <input type="text" placeholder="Search similar NEWS" className="w-60 md:w-70 px-3 md:px-6 h-9 md:h-12 outline-none rounded-full bg-gray-700 text-white outline-none" />
          <Image className='border bg-gray-600 rounded-full w-9 md:w-12 hover:cursor-pointer' src={search} alt="search" />
        </div>
        <Link href={'/blog'} className="w-45 h-12 pl-5 py-2 md:block hidden bg-gray-600 rounded-full hover:bg-gray-700 hover:transition-transform hover:scale-[1.1] hover:duration-700 hover:cursor-pointer hover:transform-translation ">EXPLORE →</Link>
      </div>

    </div>
  )
}

export default Hero