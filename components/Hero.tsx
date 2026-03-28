import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import { posts } from '../app/data';

import trend from '../public/trend.png';
import search from '../public/search.png';

const Hero = () => {
  const post = posts.find(p => p.id === 3);

  if (!post) {
    return <div className='p-10 text-2xl bg-red-500 text-white'>hero product not found</div>
  }

  return (
    <div className='bg-gray-900 text-white'>
      
      {/* MAIN HERO */}
      <div className=" mx-6 md:mx-12 pt-12 flex flex-col lg:flex-row gap-10 items-center">

        {/* LEFT CONTENT */}
        <div className="lg:w-1/2 w-full backdrop-blur-md bg-gray-800/40 p-6 md:p-10 rounded-2xl border border-gray-700 shadow-lg">

          {/* Label */}
          <div className='flex items-center gap-3 mb-4'>
            <Image className="w-5" src={trend} alt="flame" priority />
            <p className='text-gray-400 text-sm tracking-widest uppercase'>Hot News</p>
          </div>

          {/* Title */}
          <Link 
            href={`/blog/${post.id}`} 
            className="block text-3xl md:text-5xl font-semibold leading-tight hover:text-gray-300 transition duration-300"
          >
            {post.title}
          </Link>

          {/* Description */}
          <p className="mt-5 text-gray-300 text-base md:text-lg leading-relaxed line-clamp-2">
            {post.desc}
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className=' lg:w-1/2 w-full relative group'>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-2xl z-10"></div>
          
          <Image 
            className="rounded-2xl border border-gray-700 shadow-lg group-hover:scale-105 transition duration-500"
            src={post.img} 
            alt="hero_Image" 
            priority 
          />
        </div>
      </div>

      {/* SEARCH + CTA */}
      <div className=" mt-12 px-6 md:px-12 pb-12 flex flex-col md:flex-row gap-5 justify-between items-center">

        {/* Search */}
        <div className=' flex items-center bg-gray-800 rounded-full px-3 py-2 w-full md:w-auto border border-gray-700 transition'>
          <input 
            type="text" 
            placeholder="Search similar news..." 
            className=" bg-transparent outline-none text-white px-3 w-full md:w-72"
          />
          <Image 
            className='w-8 cursor-pointer opacity-80 hover:opacity-100 transition' 
            src={search} 
            alt="search" 
          />
        </div>

        {/* Button */}
        <Link 
          href={'/blog'} 
          className="px-6 py-3 rounded-full bg-gray-700 hover:bg-gray-600 transition duration-300 hover:scale-105 text-sm tracking-wide"
        >
          EXPLORE →
        </Link>

      </div>
    </div>
  )
}

export default Hero