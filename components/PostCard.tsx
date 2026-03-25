import React from 'react'
import Image, { StaticImageData } from "next/image";
import Link from 'next/link';

type PostCardProps = {
  id:number
  title: string
  date: string
  desc: string
  img: StaticImageData
}

const PostCard = ({ id, title, date, desc, img }: PostCardProps) => {
  return (
    <div className='p-10 text-white w-[1200px]'>
      
      <p className='text-gray-500 mb-5'>{date}</p>

      <h1 className='text-5xl mb-10'>
        {title}
      </h1>

      <Image
        src={img}
        className='w-[1000px]'
        alt="post image"
        priority
      />

      <p className='my-10'>
        {desc}
      </p>

      <Link href={`/blog/${id}`} className='hover:cursor-pointer hover:text-gray-300 duration-500 transform hover:scale-110 text-2xl'>
        Read full post 
      </Link>
      <hr className='text-gray-500' />

    </div>
  )
}

export default PostCard