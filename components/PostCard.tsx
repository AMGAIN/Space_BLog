import React from 'react'
import Image, { StaticImageData } from "next/image";
import Link from 'next/link';
import arrow from '../public/arrow.png'

type PostCardProps = {
  id: number
  title: string
  date: string
  desc: string
  author: string
  img: StaticImageData
}

const PostCard = ({ id, title, date, desc, img }: PostCardProps) => {
  return (
    <div className='bg-gray-900 px-3 sm:px-20 md:px-25 lg:px-45 xl:px-75 2xl:px-100 text-white w-full'>
      <p className='text-gray-500 mt-4 mb-4'>{date}</p>
      <h1 className='text-4xl mb-8'>{title}</h1>
      <Image src={img} className=' border-white w-full' alt="post image" priority />
      <p className='my-10 text-justify w-full line-clamp-2 text-gray-300'>{desc}</p>
      <div >
        <Link href={`/blog/${id}`} className='w-50 flex hover:cursor-pointer hover:text-gray-300 duration-500 transform hover:scale-101 text-2xl'>
          Read full post
          <Image className='ml-2 w-10 invert' src={arrow} alt='arrow' />
        </Link>
        
      </div>
      <hr className='text-gray-600 mt-2' />
    </div>
  )
}

export default PostCard