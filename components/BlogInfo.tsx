import React from 'react'
import Image, { StaticImageData } from "next/image";
import x from '../public/x.png'
import facebook from '../public/facebook.png'
import linkedin from '../public/linkedIn.png'

type Props = {
  id: number
  title: string
  author: string
  date_time: string
  desc: string
  img: StaticImageData
}

const BlogInfo = ({ author, date_time }: Props) => {
  return (
    <div className='bg-gray-800/40 backdrop-blur-md border border-gray-700 rounded-2xl p-6 text-white shadow-lg'>

      {/* AUTHOR */}
      <div className='flex items-center gap-4 mb-6'>
        <div className='w-14 h-14 rounded-full bg-gradient-to-br from-gray-600 to-gray-800'></div>
        <div>
          <p className='text-sm text-gray-400'>Author</p>
          <p className='text-lg font-medium'>{author}</p>
        </div>
      </div>

      <hr className='border-gray-700 my-4' />

      {/* DATE */}
      <p className='text-gray-400 text-sm mb-6'>{date_time}</p>

      {/* CATEGORIES */}
      <div className='mb-6'>
        <p className='text-sm text-gray-400 mb-2'>Categories</p>
        <div className='flex flex-wrap gap-2'>
          {['Space', 'Logistics', 'Travel'].map((cat) => (
            <button 
              key={cat}
              className='px-3 py-1 text-sm bg-gray-700 rounded-full hover:bg-gray-600 transition'
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <hr className='border-gray-700 my-4' />

      {/* SOCIAL */}
      <div className='flex justify-center gap-4 mt-4'>
        {[x, facebook, linkedin].map((icon, index) => (
          <Image 
            key={index}
            src={icon} 
            alt="social" 
            className='w-6 opacity-70 hover:opacity-100 hover:scale-110 transition cursor-pointer'
          />
        ))}
      </div>

    </div>
  )
}

export default BlogInfo