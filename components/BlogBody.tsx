import React from 'react'
import Image from 'next/image'
import { StaticImageData } from 'next/image';

type Props = {
  id: number
  title: string
  author: string
  date_time: string
  desc: string
  img: StaticImageData
}

const BlogBody = ({ title, desc, img }: Props) => {
  return (
    <div className='w-full flex flex-col items-center'>

      <div className='max-w-3xl w-full'>

        {/* TITLE */}
        <h1 className='text-3xl md:text-5xl font-semibold leading-tight mb-8'>
          {title}
        </h1>

        {/* IMAGE */}
        <div className='relative group mb-10'>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl z-10"></div>
          
          <Image 
            className='w-full rounded-2xl border border-gray-700 shadow-lg group-hover:scale-[1.02] transition duration-500'
            src={img} 
            alt="blog"
            priority
          />
        </div>

        {/* CONTENT */}
        <div className='text-gray-300 text-base md:text-lg leading-relaxed space-y-6 text-justify'>
          {desc.split('\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

      </div>
    </div>
  )
}

export default BlogBody