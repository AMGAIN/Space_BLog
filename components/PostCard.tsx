import React from 'react'
import Image, { StaticImageData } from "next/image";
import Link from 'next/link';

type PostCardProps = {
  id:number
  title: string
  date: string
  desc: string
  author: string
  img: StaticImageData
}

const PostCard = ({ id, title, date, desc, img }: PostCardProps) => {
  return (
    <div className='px-10 text-white w-[1200px]'>
      
      <p className='text-gray-500 mb-5'>{date}</p>

      <h1 className='text-5xl mb-10'>
        {title}
      </h1>

      <Image
        src={img}
        className=' border w-[1100px]'
        alt="post image"
        priority
      />

      <p className='my-10 text-justify w-[1100px]'>
        {desc}
      </p>

      <Link href={`/blog/${id}`} className='hover:cursor-pointer hover:text-gray-300 duration-500 transform hover:scale-110 text-2xl'>
        Read full post 
      </Link>
      <br />
      <br />
      <hr className='text-gray-500 w-[1100px]' />
    </div>
  )
}

export default PostCard