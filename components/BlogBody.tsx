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

const BlogBody = ({ id, title,author, date_time, desc, img}: Props) => {
  return (
    <div className='w-full p-2 text-white flex flex-col items-center py-5'>
        <h1 className='text-4xl md:text-5xl mb-10'>{title}</h1>
        <Image className='w-full ' src={img} alt="alt_img"></Image>
        <p className='md:my-10 w-full text-justify'>{desc}</p>
    </div>
  )
}

export default BlogBody