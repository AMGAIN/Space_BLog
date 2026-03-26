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
    <div className='px-10 text-white w-[400px] md:w-[600px] lg:w-[800px]'>
      <p className='text-gray-500 mt-4 mb-4'>{date}</p>
      <h1 className='text-4xl mb-8'>{title}</h1>
      <Image src={img} className=' border-white w-[320px] md:w-[500px] lg:w-[700px]' alt="post image" priority/>
      <p className='my-10 text-justify w-[320px] md:w-[500px] lg:w-[700px] text-gray-300'>
        {desc}
      </p>
      <Link href={`/blog/${id}`} className='hover:cursor-pointer hover:text-gray-300 duration-500 transform hover:scale-110 text-2xl'>
        Read full post 
      </Link>
      <hr className='text-gray-500 w-[330px]' />
    </div>
  )
}

export default PostCard